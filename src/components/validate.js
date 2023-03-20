export const validate=data=>{
    const errors={};
    if(! data.name.trim()){
errors.name="username riquiered "
    }
    // trim(): delete spaces , if user enters only spaces for name, we give him error 
    // we want to user enters letters 
else{
    delete errors.name
}
 if (!data.email){
    errors.email="email required"
} else if(! /\s+@\s+\.\s+/.test(data.email)){errors.email="email address is invalid"}
else {
    delete errors.email
}
if( !data.password){
    errors.password="password is required"
} else if(data.password.lenght<6){
    errors.password="password need to be six character or more"
} else{
    delete errors.password
}
if (! data.confirmpassword){
    errors.confirmpassword= "confirm the password"
} else if(data.confirmpassword !== data.password)
{
    errors.confirmpassword="pssword do not match"
} else {
    delete errors.confirmpassword
}
if (data.isAccepted){
    delete errors.isAccepted
}
else{
    errors.isAccepted="Accept our regulations"
}
return errors
}