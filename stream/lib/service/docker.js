const Docker = require('dockerode')
const docker = new Docker({ socketPath: '/var/run/docker.sock' })
const options = {
  Tty: false,
  WorkingDir: process.cwd(),
  HostConfig: {
    Binds: [`${process.cwd()}:${process.cwd()}`],
    AutoRemove: true
  }
}

exports.run = (image, calls, streams) => {
  return new Promise((resolve) => {
    docker.pull(image, {}, async (err, stream) => {
      if (err) {
        throw err
      }
      const [res, container] = await docker.run(image, calls, streams, options)
      resolve([res, container])
    })
  })
}

exports.destroy = async () => {
  const containers = await docker.listContainers()
  await Promise.all(containers.map(function (containerInfo) {
    return new Promise((resolve) => {
      docker.getContainer(containerInfo.Id).stop(resolve)
    })
  }))
  console.log('ABORT')
  process.abort()
}
