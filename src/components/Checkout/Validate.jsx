export const validar= (values)=>{
  
  if(values.nombre.length < 5){
    alert('El nombre es demasiado corto')
    return false
  }
  if(values.email.length < 7){
    alert('El correo es demasiado corto')
    return false
  }
  if(values.tel.length < 8){
    alert('El teléfono es inválido')
    return false
  }

  return true

}