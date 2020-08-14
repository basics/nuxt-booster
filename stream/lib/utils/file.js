const fs = require('fs')

exports.readFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}

exports.readJSONFile = async (file) => {
  try {
    const buffer = await this.readFile(file)
    return JSON.parse(buffer)
  } catch (e) {
    return []
  }
}

exports.writeFile = (file, data) => {
  return new Promise((resolve) => {
    fs.writeFile(file, data, 'utf8', resolve)
  })
}

exports.writeJSONFile = (file, data) => {
  return this.writeFile(file, JSON.stringify(data))
}
