const Docker = require('dockerode');
const docker = new Docker({ socketPath: '/var/run/docker.sock' });

const inspectContainer = async (containerId) => {
    let response = null;
    let container = docker.getContainer(containerId);
    try {
        response = await container.inspect();
        console.info("Dockerode response: ", response);
    } catch (error) {
        console.error(error);
    }
}

const getTopProcessInContainer = async (containerId) => {
    let response = null;
    let container = docker.getContainer(containerId);
    try {
        response = await container.top();
        console.info("Dockerode response: ", response);
    } catch (error) {
        console.error(error);
    }
}

const stopContainer = async (containerId) => {
    let response = null;
    let container = docker.getContainer(containerId);
    try {
        response = await container.stop();
        console.info("Dockerode response: ", response);
    } catch (error) {
        console.error(error);
    }
}

const startContainer = async (containerId) => {
    let response = null;
    let container = docker.getContainer(containerId);
    try {
        response = await container.start();
        console.info("Dockerode response: ", response);
    } catch (error) {
        console.error(error);
    }
}

const stats = async (containerId) => {
    let response = null;
    let container = docker.getContainer(containerId);
    try {
        response = await container.stats();
        console.info("Dockerode response: ", response);
    } catch (error) {
        console.error(error);
    }
}

// inspectContainer('portainer');
// stopContainer('portainer');
// startContainer('portainer');
stats('portainer');
// getTopProcessInContainer('portainer');