

function Profile() {
  const imageUrl = "../src/assets/Profilepiic.jpg";
  const handleClick = (e) => (e.target.style.opacity = "0%");
  const handleClick2 = (e) => (e.target.style.opacity = "100%");

  return (
    <img
      onClick={(e) => handleClick(e)}
      onDoubleClick={(e) => handleClick2(e)}
      src={imageUrl}
      alt=""
    />
  );
}
export default Profile;
