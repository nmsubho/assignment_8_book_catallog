import express from 'express';
import { facultyRoutes } from '../modules/faculty/faculty.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/faculties',
    route: facultyRoutes,
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
