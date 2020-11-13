.then((res) => {
    // console.log(res)
    var ambul = res['data']['activeSOS']
    console.log(ambul.length)
    for (let index = 0; index < ambul.length; index++) {
      console.log(ambul[index]['hospital_name'])
      alldata.push(ambul[index])
      this.state.hospital_name.push(ambul[index]['hospital_name'])
      this.state.otp.push(ambul[index]['otp'])

    }
  }
  )
  // .then(response => console.log(response))
  .then(data => {
    // this.setState({trafficAmbul : data.activeSOS})
  })
  .then(
    // console.log("0000000000"),
    // console.log(this.state.trafficAmbul)

  )