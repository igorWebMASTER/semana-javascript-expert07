onmessage = ({ data }) => {
  let counter = 0;

  console.log('activation blocking operation...', data.maxItems)
  console.time('blocking-up')

  for(;  counter < data.maxItems; counter++) console.log('.', i)
  console.timeEnd('blocking-up')

  postMessage(
    { response: 'ok', data: counter }
  )
}