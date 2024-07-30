const formatTime = (createdAt)=>{
    const date = new Date(createdAt);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes}`;
}

export default formatTime;