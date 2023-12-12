export default function ItemImgDH(props) {
    const ip = "http://localhost:8080"
    return (
          <img
              src={ip + `/${props.files[0].filePath}`}
              alt=""
            />
    )
}