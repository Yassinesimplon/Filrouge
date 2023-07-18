import express from 'express';
import { VerifyToken, isAdmin, isOwner } from '../Middleware/authMiddleware.js';
import * as candidatureControllers from '../controllers/candidatureControllers.js';

const router = express.Router();

router.get('/', VerifyToken, candidatureControllers.readCandidature);
router.get('/:id', VerifyToken, candidatureControllers.readOneCandidature);
router.put('/:id',[ VerifyToken, isOwner], candidatureControllers.updateStateCandidature);
router.post('/', VerifyToken, candidatureControllers.createCandidature);
router.delete('/:id',[ VerifyToken, isOwner], candidatureControllers.deleteCandidature);
router.put('/:id/state',[ VerifyToken, isOwner], candidatureControllers.updateStateCandidature  );

export default router;
