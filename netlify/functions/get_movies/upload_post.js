var axios = require('axios');

const handler = async (event) => {
    try {
        let token = "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"

        uploadFileApi(token, imageDataURL)

        function uploadFileApi(token, content) {
        
        var data = JSON.stringify({
            "message": "txt file",
            "content": `${content}`
        });
        
        var config = {
            method: 'put',
            url: 'https://api.github.com/repos/sumit-s03/Test/contents/abc.txt',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            data: data
        };
        
        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        
        return {
            statusCode: 200,
            body: JSON.stringify(results),
        }
    } catch (error) {
        return { statusCode: 500, body: error.toString() }
    }
}

module.exports = { handler }