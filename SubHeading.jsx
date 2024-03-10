function SubHeading()
{
   
    let date=new Date();
    let year=date.getFullYear();
    let month=date.getMonth();
    let day=date.getDay();
    let hours=date.getHours();
    let second=date.getSeconds();
    let minutes=date.getMinutes();
    return <p className="text-1xl font-bold text-center">Current date is :{year} : {month+1} :{day} ~~~~~ And ~~~~~~~  Current time is : {hours}h : {minutes}m : {second}s</p>
}
export default SubHeading;