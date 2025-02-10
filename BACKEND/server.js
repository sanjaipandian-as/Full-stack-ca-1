const express=require ('express')

const app=express()

port=8000;

app.get(express.json())


app.post('/signup',(req,res)=>{
    const {username,email,password,dateofbirth}=body.json();

    if (!username)
    {
        res.status(400),json({msg:"Username cannot be empty"})
    }

    if (!email)
    {
        res.status(400),json({msg:"Email cannot be empty"})
    }

    if(password<8 || password>=16)
    {
        res.status(400),json({msg:"password length should be greaterthan 8 or less than or equal to 16"})
    }

    if (!dateofbirth)
    {
        res.status(400),json({msg:"data of birth cannot be empty"})
    }

    return res.status(200),json({msg:"you are succesfully signedup"})
})

app.listen(()=>{
    console.log(`server is running on the ${port}`)
})