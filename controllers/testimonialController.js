import { Testimonial } from "../models/Testimoniales.js";


const guardarTestimonial= async (req,res)=>{
    //Validar 
    const{nombre,correo,mensaje}=req.body;

    const errores=[ ];

    if(nombre.trim()===''){
        errores.push({mensaje:'el nombre esta vacio'});
    }
    if(correo.trim()===''){
        errores.push({mensaje:'el correo esta vacio'});
    }
    if(mensaje.trim()===''){
        errores.push({mensaje:'el mensaje esta vacio'});
    }

    if(errores.length>0){
    // consultar testimoniales
    const testimoniales= await Testimonial.findAll();
    //  Mostrar la vista con errores

    res.render('testimoniales',{
        pagina:'testimoniales',
        errores,
        nombre,
        correo,
        mensaje,
        testimoniales
    })
}
else{
    try {
        await Testimonial.create({
            nombre,
            correo,
            mensaje
        })
        res.redirect('/testimoniales');
    } catch (error) {
        
    }
}
}

export{
    guardarTestimonial
}