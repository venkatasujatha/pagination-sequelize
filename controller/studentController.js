const Student = require("../entity/student");
const Sequelize= require('sequelize')
const Op=Sequelize.Op;
const db = require("../database");

//bulk create students
const bulkCreateStudent = async (req, res) => {
  
  try {
    const resp = await Student.bulkCreate(req.body);

    console.log("Students created successfully");
    res.send(resp);
  } catch (error) {
    console.error(error.message);
  }
};

const getPagination =async (req, res) => {
 
  const {page,size}=req.body;
  try {
    const resp= await Student.findAndCountAll({
      limit: size,
      offset:page*size,
      where: {
        firstName:
        {
          //[Op.like]: '%req.query.firstName%'
          [Op.or]: [
            { [Op.like]: `%${req.body.firstName}%` },
            { [Op.like]: `${req.body.firstName}%` },
            { [Op.like]: `%${req.body.firstName}`}
        ]
        }
      }
    });
    res.send(resp);

    // res.send({content:resp.rows,
    // totalPages:resp.count/size});
  }
  catch(err)
  {
    console.error(err.message);
  }
 

}

module.exports ={bulkCreateStudent,getPagination}