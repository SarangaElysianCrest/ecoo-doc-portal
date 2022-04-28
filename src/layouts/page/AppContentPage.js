export default function AppContentPage(props){
    return (
        <div className="container mx-auto flex-row flex-wrap ">
            {props.children}
        </div>
    )
}