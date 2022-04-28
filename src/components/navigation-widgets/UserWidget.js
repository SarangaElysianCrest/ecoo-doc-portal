export default function UserWidget({
    name,
    avatar,
}){
    return (
        <div>
            {name}
            <img src={avatar} alt={`m1-space:user:${name}`}/>
        </div>
    )
}