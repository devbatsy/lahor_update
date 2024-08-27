require('dotenv').config();
const http = require('http')
const express = require('express');
const path = require('path');
const app = express()
const server = http.createServer(app);
const body = require('body-parser');
const urlencoded = body.urlencoded({extended:false});
const uuid = require('uuid')
const fs = require('fs');
const mailer = require('nodemailer');
const websocket = require('ws');
const wss = new websocket.Server({server});
server.listen(9000, () =>{
    console.log('server running at port 9000')
})

app.set('view engine' , 'ejs');

app.use(body.json());

app.use(express.static(path.join(__dirname , 'static/blog/blog_per_page')));
app.use(express.static(path.join(__dirname , 'static/home')));
app.use(express.static(path.join(__dirname , 'static/about')));
app.use(express.static(path.join(__dirname , 'static/gallery')));
app.use(express.static(path.join(__dirname , 'static/blog')));
app.use(express.static(path.join(__dirname , 'static/service')));
app.use(express.static(path.join(__dirname , 'static/apartment')));
app.use(express.static(path.join(__dirname , 'static/apartment_cat')));
app.use(express.static(path.join(__dirname , 'static/contact')));
app.use(express.static(path.join(__dirname , 'static/book_page')));
app.use(express.static(path.join(__dirname , 'static/book_page')));
app.use(express.static(path.join(__dirname , 'static/admin')));
app.use(express.static(path.join(__dirname , 'static')));
app.use(express.static(__dirname));

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname , 'static/home/$hindex.html'))
})
app.get('/home', (req,res) =>{
    res.sendFile(path.join(__dirname , 'static/home/$hindex.html'))
})

app.get('/about' , (req,res) =>{
    res.sendFile(path.join(__dirname , 'static/about/$abindex.html'))
})

app.get('/service' , (req,res) =>{
    res.sendFile(path.join(__dirname , 'static/service/$svindex.html'))
})

app.get('/apartment' , (req,res) =>{
    const {type} = req.query;
    const apartmentData = JSON.parse(fs.readFileSync('./shortlets.json').toString())[type];
    if(apartmentData)
    {
        res.render(path.join(__dirname , 'static/apartment/$apindex.ejs'),{name:apartmentData.Name , img:apartmentData.image , description:apartmentData.description , main_content:`${apartmentData.main_content}`, price:apartmentData.price_per_day , feature:apartmentData.features})        
    }else res.send('invalid query parameter')

})

app.get('/gallery' , (req,res) =>{
    res.sendFile(path.join(__dirname , 'static/gallery/$gindex.html'))
    // res.send('COMING SOON ...')
})

app.get('/blog' , (req,res) =>{
    res.sendFile(path.join(__dirname , 'static/blog/$bindex.html'))
})

app.get('/contact' , (req,res) =>{
    res.sendFile(path.join(__dirname , 'static/contact/$ctindex.html'))
})

app.get('/blog/blog_page' , (req,res) =>{
    res.render(path.join(__dirname , 'static/blog/blog_per_page/$bppindex.ejs') , {title:req.query.title})
})

app.get('/get_apartment_info' , (req,res) =>{
    console.log('recieved this request');
    const apartmentData = JSON.parse(fs.readFileSync('./shortlets.json').toString());
    const userResponse = Object.keys(apartmentData).map(val =>{return apartmentData[val]})
    res.json(userResponse);
})

app.get('/admin_page' , (req,res) =>{
    res.sendFile(path.join(__dirname , 'static/admin/$admin.html'))
})

app.post('/available_apartment' , urlencoded , (req,res) =>{
    res.render(path.join(__dirname , 'static/apartment_cat/$apcindex.ejs') , {guestNum:req.body.guestAmount})
})

app.post('/admin/update_gallery' , urlencoded , (req,res) =>{
    const mainData = req.body;

    try{
        const report = fs.writeFileSync(path.join(__dirname , 'galleryImage.json') , JSON.stringify(mainData));
        res.json({status:'good'})
    }catch(err)
    {
        res.json({status:'bad'})
    }
})

app.post('/admin/update_apartment' , urlencoded , (req,res) =>{
    const mainData = req.body;

    try{
        const report = fs.writeFileSync(path.join(__dirname , 'shortlets.json') , JSON.stringify(mainData));
        res.json({status:'good'})
    }catch(err)
    {
        res.json({status:'bad'})
    }
})

app.post('/admin/update_blog' , urlencoded , (req,res) =>{
    const mainData = req.body;

    try{
        const report = fs.writeFileSync(path.join(__dirname , 'blog.json') , JSON.stringify(mainData));
        res.json({status:'good'})
    }catch(err)
    {
        res.json({status:'bad'})
    }
})

app.get('/all_apartment' , (req,res) =>{
    res.render(path.join(__dirname , 'static/apartment_cat/$apcindex.ejs') , {guestNum:'0'})
})

app.post('/book_reservation' , urlencoded , (req,res) =>{
    const book_info = `${req.body.a_name} , ${req.body.check_in} , ${req.body.check_out} , ${req.body.guest_input} , ${req.body.room_number}`;

    res.render(path.join(__dirname , 'static/book_page/$book.ejs') , {book_info:book_info})
})

app.post('/send_book_msg' , urlencoded , async (req,res) =>{

    try{
        const data = req.body;

        const booking_email_text = `
            <h1 style = "font-family:cursive;color:#b99d75;font-weight:900;"> LAHOR Luxury Apartment </h1>
            <h2 style ="font-family:ubuntu;"> USER BOOKING REQUEST</h2>
            <p> Booking ID : ${uuid.v4()}</p>
            <p> Client Name : ${data.username}</p>
            <p> Apartment Name : ${data.apartmentName}</p>
            <p> Amount of Occupants : ${data.guest}</p>
            <p> Rooms Occupying : ${data.room}</p>
            <p> Date of entry : ${data.check_in}</p>
            <p> Date of exit : ${data.check_out}</p>
            <p> Whatsapp Contact : ${data.phone}</p>
            <p> Client Email : ${data.email}</p>
        `

        await mailerFunc({msg:booking_email_text , email:'devbatsystudios@gmail.com' , res:res});

    }
    catch(err)
    {
        // res.json({status:'bad'})
        console.log('error occured at the catch statement')
    }
})


async function mailerFunc ({msg,email,res}){

    const transporter = mailer.createTransport({
        service:'Gmail',
        auth:{
            user:'nworahfavour2004@gmail.com',
            pass:'pvea vpim pyqz ngug'
        }
    })
    
    const options = {
        from:'nworahfavour2004@gmail.com',
        to:email,
        subject:'lAHOR LUXURY APARTMENTS - BOOKING RESERVATION',
        html:msg
    }
    
    await transporter.sendMail(options, (err, info) =>{
        if(err){
            console.log('error sending email')

            res.json({status:'bad'})
        }
        else{
            res.json({status:'good'})
            console.log('sent email')
        }
    })
}


wss.on('connection' , ws =>{
    ws.on('message' , (data) =>{
        try{
            const parsedData = JSON.parse(data.toString());

            switch(parsedData.post)
            {
                case 'img_names':
                    sendImageName(ws)
            }
        }
        catch(err)
        {
            console.log('this is an error')
        }
    })
})

function sendImageName(ws)
{
    const data = fs.readdirSync(path.join(__dirname , './static/assets'));
    ws.send(JSON.stringify({post:'img_names' , data:data}))
    console.log('sent successfull')
}