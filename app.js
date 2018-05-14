function initApplication(confing, urls) {

  const { width, height } = config
  document.querySelector("#iframe-health").style.width = width
  document.querySelector("#iframe-health").style.height = height
  iframeTransactions(config, urls)
}

const iframeTransactions = ({ timer }, urls) => {
  const amountUrls = urls.length
  let slide = 0

  window.setInterval(() => {
    slide = slide >= amountUrls ? 0 : slide
    console.log('changing url', urls[slide])
    document.querySelector("#iframe-health").src = urls[slide]
    slide++
  }, timer)
}