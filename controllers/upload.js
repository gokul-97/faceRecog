// const multer = require('multer')
// let regno = "";
// module.exports = function (regno) {
//   const storage = multer.diskStorage({
//     destination: `./public/labelled_images/${regno}`,
//     filename: function (req, res, file, cb) {
//       cb(null, file.originalname);
//     }
//   });

//   const upload = multer({
//     storage: storage
//   }).single('img');

// }

// const storage = multer.diskStorage({
// destination: (req, file, cb) => {
//   const { userId } = req.body
//   const dir = ./uploads/${userId}
//   fs.exists(dir, exist => {
//   if (!exist) {
//     return fs.mkdir(dir, error => cb(error, dir))
//   }
//   return cb(null, dir)
//   })
// },
// filename: (req, file, cb) => {
//   const { userId } = req.body
//   cb(null, UserId-${userId}-Image-${Date.now()}.png)
// }
// })

// const upload = multer({ storage })