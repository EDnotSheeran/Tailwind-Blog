import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({});

async function main() {
  /* ==================
    Soft Delete Middleware
  ===================*/
  const softDeleteTables: string[] = ['Post'];
  softDeleteTables.map(table => {
    prisma.$use(async (params, next) => {
      if (params.model == table) {
        if (params.action == 'delete') {
          params.action = 'update';
          params.args['data'] = { deletedAt: true };
        }
        if (params.action == 'deleteMany') {
          params.action = 'updateMany';
          if (params.args.data != undefined) {
            params.args.data['deleted'] = true;
          } else {
            params.args['data'] = { deletedAt: true };
          }
        }
      }
      return next(params);
    });
  });
}

main();
