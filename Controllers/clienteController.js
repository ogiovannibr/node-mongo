const Cliente = require('../Models/cliente');
const Exame = require('../Models/exame');

exports.getAllClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao buscar clientes', error });
  }
};

exports.getClienteById = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id).populate('exames');
    const exames = await Exame.find({ id_cliente: req.params.id });
    res.json({ clientes, exames });
  } catch (error) {
    res.status(404).json({ mensagem: 'Cliente não encontrado', error });
  }
};

exports.createCliente = async (req, res) => {
  try {
    const novoCliente = new Cliente(req.body);
    const clienteSalvo = await novoCliente.save();
    res.status(201).json(clienteSalvo);
  } catch (error) {
    res.status(400).json({ mensagem: 'Erro ao cadastrar cliente', error });
  }
};

exports.updateCliente = async (req, res) => {
  try {
    const clienteAtualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(clienteAtualizado);
  } catch (error) {
    res.status(400).json({ mensagem: 'Erro ao atualizar cliente', error });
  }
};

exports.deleteCliente = async (req, res) => {
  try {
    await Exame.deleteMany({ id_cliente: req.params.id });
    await Cliente.findByIdAndDelete(req.params.id);
    res.json({ mensagem: 'Cliente e exames associados excluídos com sucesso' });
  } catch (error) {
    res.status(400).json({ mensagem: 'Erro ao excluir cliente', error });
  }
};