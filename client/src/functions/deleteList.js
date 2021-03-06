import axios from "axios"

export default function deleteList(listName) {
    axios.delete('v1/', { data: { listName: listName } })
        .then(response => {
            console.log(response.status);
        }).catch(error => {
            console.log(error);
        });
}