const Exame = require('../Models/exame');
const Cliente = require('../Models/cliente');

exports.getAllExames = async (req, res) => {
  try {
    const exames = await Exame.find().populate('id_cliente');
    res.json(exames);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao buscar exames', error });
  }
};

exports.getExameById = async (req, res) => {
  try {
    const exame = await Exame.findById(req.params.id).populate('id_cliente');
    res.json(exame);
  } catch (error) {
    res.status(404).json({ mensagem: 'Exame não encontrado', error });
  }
};

exports.createExame = async (req, res) => {
  try {
    const novoExame = new Exame(req.body);
    const exameSalvo = await novoExame.save();
    res.status(201).json(exameSalvo);
  } catch (error) {
    res.status(400).json({ mensagem: 'Erro ao cadastrar exame', error });
  }
};

exports.updateExame = async (req, res) => {
  try {
    const exameAtualizado = await Exame.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(exameAtualizado);
  } catch (error) {
    res.status(400).json({ mensagem: 'Erro ao atualizar exame', error });
  }
};

exports.deleteExame = async (req, res) => {
  try {
    await Exame.findByIdAndDelete(req.params.id);
    res.json({ mensagem: 'Exame excluído com sucesso' });
  } catch (error) {
    res.status(400).json({ mensagem: 'Erro ao excluir exame', error });
  }
};