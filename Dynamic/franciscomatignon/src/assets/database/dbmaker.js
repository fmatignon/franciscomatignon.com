const fs = require('fs')
const path = require('path')

// Create a JSON database file from the project folders
let database = []
const projects = fs.readdirSync('projects')
for (let project of projects) {
  let info = require(`./Projects/${project}/${project.split(' - ')[1]} - info.json`)
  info.link = `${project.split(' - ')[1].toLowerCase().replace(/\s/g,'-')}`
  let images = fs.readdirSync(`projects/${project}/images`)
  info.images = []
  for (let image of images) {
    info.images.push(`../../assets/database/Projects/${project}/Images/${image}`)
  }
  database.push(info)
}
let dataOutput = JSON.stringify(database)
fs.writeFileSync('projects.json', dataOutput)

// make an array to find heroes easier
let projectsArray = [];
for (let project of database) {
  projectsArray.push(project.link)
}
let projectsObject = JSON.stringify({...projectsArray})
fs.writeFileSync('projectsArray.json', projectsObject)
