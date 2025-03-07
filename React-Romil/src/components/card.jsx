function Profile (){
    return(
        <div>
            <h1>Profile Card</h1>
            <ProfileCard
             name="Romil"
                age={19}
                greeting={
                    <div>
                        <strong>hii Romil, have a wonderful day</strong>
                    </div>
                } >
                <p>Hobbies: Reading,Hiking</p>
                <button>contact</button>
            </ProfileCard>

            <ProfileCard
             name="Rahul"
                age={33}
                greeting={
                    <div>
                        <strong>hii Rahul, have a wonderful day</strong>
                    </div>
                } >
                <p>Hobbies: Reading,Hiking</p>
                <button>contact</button>
            </ProfileCard>
        </div>
    );
};
export default Profile;

function ProfileCard({name,age,greeting,children}){
    // const{name,age,greeting,children}=props;
    return(
        <>
            <h2>name:{name}</h2>
            <p>age:{age}</p>
            <p>{greeting}</p>
            <div>{children}</div>
        </>
    );
}