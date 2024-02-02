const writeToOutput = (output) => {
    document.getElementById("output").innerText = output
}
const question = () => {
  const body = { question: document.getElementById("question").value };
  console.log(body);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  fetch("/question", options)
    .then(async (data) => {
      if (!data.ok) {
        console.error(data.status);
      }
      data = await data.json()
      console.log(data)
      writeToOutput(data['output'])
    })
    .catch((e) => {
      console.error(e);
    });
};
