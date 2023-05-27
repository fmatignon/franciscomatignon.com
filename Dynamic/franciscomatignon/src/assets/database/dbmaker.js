const fs = require('fs')
const path = require('path')

// Create a JSON database file from the project folders
let database = []
const projects = fs.readdirSync('../projects')
for (let project of projects) {
  let info = require(`../Projects/${project}/${project.split(' - ')[1]} - info.json`)
  info.link = `${project.split(' - ')[1].toLowerCase().replace(/\s/g,'-')}`
  let images = fs.readdirSync(`../projects/${project}/images`)
  info.images = []
  for (let image of images.slice(1)) {
    info.images.push(`../../assets/Projects/${project}/Images/${image}`)
  }
  info.cover = `../../assets/Projects/${project}/Images/${images[0]}`
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

// Create a JSON database file for each of the cover sizes
// Mobile Covers
let mobileCoversDB = []
const mobileCovers = fs.readdirSync('../../assets/Covers/Mobile')
for (let mobileCover of mobileCovers) {
  //let info = {"link": mobileCover}
  let info = mobileCover
  mobileCoversDB.push(info)
}
mobileCoversDB = JSON.stringify(mobileCoversDB)
fs.writeFileSync('mobileCovers.json', mobileCoversDB)
// Tablet Covers
let tabletCoversDB = []
const tabletCovers = fs.readdirSync('../../assets/Covers/Tablet')
for (let tabletCover of tabletCovers) {
  //let info = {"link": mobileCover}
  let info = tabletCover
  tabletCoversDB.push(info)
}
tabletCoversDB = JSON.stringify(tabletCoversDB)
fs.writeFileSync('tabletCovers.json', tabletCoversDB)
// Desktop Covers
let desktopCoversDB = []
const desktopCovers = fs.readdirSync('../../assets/Covers/Desktop')
for (let desktopCover of desktopCovers) {
  //let info = {"link": mobileCover}
  let info = desktopCover
  desktopCoversDB.push(info)
}
desktopCoversDB = JSON.stringify(desktopCoversDB)
fs.writeFileSync('desktopCovers.json', desktopCoversDB)