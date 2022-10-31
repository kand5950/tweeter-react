function Profile(){
    const firstname = "Amy"
    const lastname = "Mansell"
    const avatar = "/profile-hex.png"

    return (
        <aside>
        <div className="profile">
          <img className="profile__image" src={avatar}></img>
        </div>
        <br />
        <div className="profile__name">
          <h2><span className="profile--bold">{firstname}</span> {lastname}</h2>
        </div>
      </aside>
    );
}

export default Profile;