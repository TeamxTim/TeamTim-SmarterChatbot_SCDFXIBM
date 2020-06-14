const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const btoa = require("btoa");
const wml_credentials = new Map();
function apiPost(scoring_url, token, mlInstanceID, payload, loadCallback, errorCallback) {
    const oReq = new XMLHttpRequest();
    oReq.addEventListener("load", loadCallback);
    oReq.addEventListener("error", errorCallback);
    oReq.open("POST", scoring_url);
    oReq.setRequestHeader("Accept", "application/json");
    oReq.setRequestHeader("Authorization", token);
    oReq.setRequestHeader("ML-Instance-ID", mlInstanceID);
    oReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    oReq.send(payload);
}
// NOTE: generate iam_token based on provided documentation
const wmlToken = "Bearer " + iam_token;
// NOTE: retrieve ml_instance_id based on provided documentation
const mlInstanceId = ml_instance_id;
// NOTE: manually define and pass the array(s) of values to be scored in the next line
const payload = '{"input_data": [{"fields": ["IPPT", "Pre-existing medical conditions", "Height", "Weight", "2.4km run Timing(mins)"], "values": [array_of_values_to_be_scored, another_array_of_values_to_be_scored]}]}';
const scoring_url = "https://us-south.ml.cloud.ibm.com/v4/deployments/21633c78-772a-4209-91c5-8d426a176c30/predictions";
apiPost(scoring_url, wmlToken, mlInstanceId, payload, function (resp) {
    let parsedPostResponse;
    try {
        parsedPostResponse = JSON.parse(this.responseText);
    } catch (ex) {
        // TODO: handle parsing exception
    }
    console.log("Scoring response");
    console.log(parsedPostResponse);
}, function (error) {
    console.log(error);
});
