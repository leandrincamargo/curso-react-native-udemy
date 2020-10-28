import { Express } from 'express';
import moment from 'moment';

module.exports = (app: Express) => {
  const getTasks = (req: any, res: any) => {
    const date = req.query.date ? req.query.date : moment().endOf('day').toDate();

    app
      .db('tasks')
      .where({ userId: req.user.id })
      .where('estimateAt', '<=', date)
      .orderBy('estimateAt')
      .then((tasks: any) => res.json(tasks))
      .catch((err: any) => res.status(500).json(err));
  };

  const save = (req: any, res: any) => {
    if (!req.body.desc.trim()) {
      return res.status(400).send('Descrição é um campo obrigatório');
    }

    req.body.userId = req.user.id;

    app
      .db('tasks')
      .insert(req.body)
      .then((_: any) => res.status(204).send())
      .catch((err: any) => res.status(400).json(err));
  };

  const remove = (req: any, res: any) => {
    app
      .db('tasks')
      .where({ id: req.params.id, userId: req.user.id })
      .del()
      .then((rowsDeleted: number) => {
        if (rowsDeleted > 0) {
          res.status(204).send();
        } else {
          res.status(400).send(`Não foi encontrada task com id ${req.params.id}`);
        }
      })
      .catch((err: any) => res.status(400).json(err));
  };

  const updateTaskDoneAt = (req: any, res: any, doneAt: Date | null) => {
    app
      .db('tasks')
      .where({ id: req.params.id, userId: req.user.id })
      .update({ doneAt })
      .then((_: any) => res.status(204).send())
      .catch((err: any) => res.status(400).json(err));
  };

  const toggleTask = (req: any, res: any, doneAt: any) => {
    app
      .db('tasks')
      .where({ id: req.params.id, userId: req.user.id })
      .first()
      .then((task: any) => {
        if (!task) {
          return res.status(400).send(`Task com id ${req.params.id} não encontrada.`);
        }

        const doneAt = task.doneAt ? null : moment(new Date()).locale('pt-br').format('YYYY-MM-DD');
        updateTaskDoneAt(req, res, doneAt);
      })
      .catch((err: any) => res.status(400).json(err));
  };

  return { getTasks, save, remove, toggleTask };
};
