import QrCodeImage from "../assets/qr-code.svg";

const QrImage = () => {
  //I use tailwind here as well
  return <img className="mb-[15px]" src={QrCodeImage} alt=" qr code image" /> 
}

export default QrImage