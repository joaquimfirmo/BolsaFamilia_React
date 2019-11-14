
export default class CROS {


    async ajax(url) {
        let result = [];
        await fetch(url)
            .then(response => response.json())
            .then(data => {
                result = (data[0] == undefined ) ? 404 : data[0];
            })
            .catch(err => {
                result = 404;
                console.log(err);
            });
        return result;
    }
}

