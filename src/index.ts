import app from "./controller/app"
//=
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
//:
import { AlterarImgController } from "./controller/AlterarImgController"
import { AlterarImgBusiness } from "./business/AlterarImgBusiness"
import { AlterarImgData } from "./data/AlterarImgData"

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

const alterarImgController = new AlterarImgController (
  new AlterarImgBusiness(
    new AlterarImgData()
  )
)


app.put("/dados", cadastroController.cadastro)

app.get("/dados/:cep", cadastroController.buscaCep)

app.get("/usuarios", buscaUsusariosController.pegarCadastro)

app.delete("/usuarios/:cpf", deletarController.delete)

app.put("/dados/img", alterarImgController.alterarImg )
//