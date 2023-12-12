export default function ItemImg(props) {
    const ip = "http://localhost:8080"
    return (
          <img
              src={ip + `/${props.files[0].filePath}`}
              alt=""
              className="product-main-list-content-card-img"
            />
    )
}