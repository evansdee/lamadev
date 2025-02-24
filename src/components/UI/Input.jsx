


export default function CustomInput({config}) {

    const {type,place,rhf} = config
  return (
    <input type={type} placeholder={place}/>
  );
}
