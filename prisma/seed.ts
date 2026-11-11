import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  const fantasy = await prisma.genre.upsert({
    where: { name: 'Fantasy' },
    update: {},
    create: { name: 'Fantasy' },
  });

  const scienceFiction = await prisma.genre.upsert({
    where: { name: 'Science Fiction' },
    update: {},
    create: { name: 'Science Fiction' },
  });

  const mystery = await prisma.genre.upsert({
    where: { name: 'Mystery' },
    update: {},
    create: { name: 'Mystery' },
  });

  const history = await prisma.genre.upsert({
    where: { name: 'History' },
    update: {},
    create: { name: 'History' },
  });

  const books = [
    {
      title: 'The Hidden Kingdom',
      author: 'Amelia Stone',
      isbn: '9780000000001',
      genreId: fantasy.id,
    },
    {
      title: 'Dragons of the Northern Sky',
      author: 'Marcus Vale',
      isbn: '9780000000002',
      genreId: fantasy.id,
    },
    {
      title: 'The Enchanted Forest',
      author: 'Lydia Hart',
      isbn: '9780000000003',
      genreId: fantasy.id,
    },
    {
      title: 'The Last Wizard',
      author: 'Daniel Frost',
      isbn: '9780000000004',
      genreId: fantasy.id,
    },
    {
      title: 'Beyond the Red Planet',
      author: 'Nora Wells',
      isbn: '9780000000005',
      genreId: scienceFiction.id,
    },
    {
      title: 'Signals from Europa',
      author: 'Ethan Cole',
      isbn: '9780000000006',
      genreId: scienceFiction.id,
    },
    {
      title: 'The Android Protocol',
      author: 'Sofia Reed',
      isbn: '9780000000007',
      genreId: scienceFiction.id,
    },
    {
      title: 'Orbit of Tomorrow',
      author: 'James North',
      isbn: '9780000000008',
      genreId: scienceFiction.id,
    },
    {
      title: 'The Silent Witness',
      author: 'Clara Moore',
      isbn: '9780000000009',
      genreId: mystery.id,
    },
    {
      title: 'Murder at Blackwood House',
      author: 'Oliver Grant',
      isbn: '9780000000010',
      genreId: mystery.id,
    },
    {
      title: 'The Missing Manuscript',
      author: 'Emma Brooks',
      isbn: '9780000000011',
      genreId: mystery.id,
    },
    {
      title: 'A Case Without Answers',
      author: 'Henry Lane',
      isbn: '9780000000012',
      genreId: mystery.id,
    },
    {
      title: 'Cities of the Ancient World',
      author: 'Rachel Adams',
      isbn: '9780000000013',
      genreId: history.id,
    },
    {
      title: 'The Age of Explorers',
      author: 'Thomas Bell',
      isbn: '9780000000014',
      genreId: history.id,
    },
    {
      title: 'Revolutions That Changed Nations',
      author: 'Grace Miller',
      isbn: '9780000000015',
      genreId: history.id,
    },
  ];

  await prisma.book.createMany({
    data: books,
    skipDuplicates: true,
  });

  console.log(`Created or verified ${books.length} books across 4 genres.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
