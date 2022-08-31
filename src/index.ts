import app from "./controller/app"
import { CadastroController } from "./controller/CadastroController"
import { CadastroBussiness } from "./business/CadastroBussines"
import { CadastroData } from "./data/CadastroData"
//;
import { BuscaUsusariosController } from "./controller/BuscaUsuarios"
import BuscaCadastroBusiness from "./business/BuscaUsuarioBusiness"
import BuscaUsusariosData from "./data/BuscaUsuariosData"
//;
import { DeletarController } from "./controller/DeletarController"
import DeletarBusiness from "./business/DeletarBusiness"
import { DeletarData } from "./data/DeletarData"


const cadastroController = new CadastroController(
  new CadastroBussiness(
    new CadastroData()
  )
)

const buscaUsusariosController = new BuscaUsusariosController(
  new BuscaCadastroBusiness(
    new BuscaUsusariosData()
  )
)

const deletarController = new DeletarController (
  new DeletarBusiness(
    new DeletarData()
  )
)



app.put("/dados", cadastroController.cadastro)

app.get("/dados/:cep", cadastroController.buscaCep)

app.get("/usuarios", buscaUsusariosController.pegarCadastro)

app.delete("/usuarios/:cpf", deletarController.delete)