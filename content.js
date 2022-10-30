// responses = JSON.parse(document.querySelectorAll('[data-z]')[1].dataset['z']).responses
// let responses = document.querySelectorAll('script')[23]
// content = document.querySelectorAll('[data-z]')[1].innerHTML
let content = document.querySelectorAll('script').forEach((el) => {
    try {
        const value = JSON.parse(el.textContent);
        const answers = value[0]?.mainEntity.suggestedAnswer
        const res = answers[0]?.text
        console.log(answers[0]?.text)
        document.querySelector('html').innerHTML = '<html><meta name="color-scheme" content="dark light"><body></body></html>';
        document.querySelector('body').innerHTML = `<body>${res}</body>`;   
    } catch (e) {
        //
    }
})
console.clear()
console.log(content)
// res = ''
// for (response in responses) {
//     res = res + responses[response].content + '<br>'
// }
// document.querySelector('html').innerHTML = '<html><meta name="color-scheme" content="dark light"><body></body></html>';
// document.querySelector('body').innerHTML = `<body>${content}${res}</body>`;   
