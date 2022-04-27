const mongoose = require( 'mongoose');

const Schema = mongoose.Schema;

const userSchema = Schema({
    Nom_prenom:{
        type:String
    },
   namestation: {
       type: String
   },
    date_heure: {
        type: String,
        
    },
    marque_vehicule: {
        type: String,
    },
    Nature_vehicule: {
        type: String
    },
  
    etat :{ type:Boolean,
    default :false,
    },
   
});
module.exports = mongoose.model('reservation', userSchema);