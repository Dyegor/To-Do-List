import axios from "axios"

export default function saveList(listName, listItems) {
    axios.post('v1/', { listName, listItems })
        .then(response => {
            console.log(response.status);
        }).catch(error => {
            console.log(error);
        });
}