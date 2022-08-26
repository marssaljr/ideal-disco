responses = JSON.parse(document.querySelectorAll('[data-z]')[1].dataset['z']).responses
content = document.querySelectorAll('[data-z]')[1].innerHTML
console.clear()
console.log(content)
res = ''
for (response in responses) {
    res = res + responses[response].content + '<br>'
}
document.querySelector('html').innerHTML = '<html><meta name="color-scheme" content="dark light"><body></body></html>';
document.querySelector('body').innerHTML = `<body>${content}${res}</body>`;   
