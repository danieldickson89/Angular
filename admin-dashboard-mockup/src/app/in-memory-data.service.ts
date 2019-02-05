import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {
    const applications = [
      {
        name: 'Progress Dashboard',
        code: 'PRGDB',
        categories: [
          {
            category: 'FINAID',
            description: 'Financial Aid',
            links: [
              {
                id: 0,
                url: 'https://www.uvu.edu/financialaid/',
                description: 'Financial Aid link description'
              }
            ]
          },
          {
            category: 'REGIS',
            description: 'Registration',
            links: [
              {
                id: 0,
                url: 'https://www.uvu.edu/',
                description: 'A link for Registration'
              },
              {
                id: 1,
                url: 'https://www.google.com/',
                description: 'Google it!'
              }
            ]
          },
          {
            category: 'ADMIS',
            description: 'Admissions',
            links: [
              {
                id: 0,
                url: 'https://www.uvu.edu/',
                description: 'A link for Admissions'
              }
            ]
          }
        ]
      },
      {
        name: 'Instances',
        code: 'INSTC',
        categories: [
          {
            category: 'QA',
            description: 'QA',
            links: [
              {
                id: 0,
                url: 'https://www.uvu.edu/',
                description: 'A link for QA'
              },
              {
                id: 1,
                url: 'https://www.qa-something.edu/',
                description: 'Another QA link'
              },
              {
                id: 2,
                url: 'https://www.qa-one-more-thing.edu/',
                description: 'A third qa link'
              }
            ]
          },
          {
            category: 'DEV',
            description: 'Development',
            links: [
              {
                id: 0,
                url: 'https://www.uvu.edu/',
                description: 'A link for dev'
              }
            ]
          },
          {
            category: 'PROD',
            description: 'Production',
            links: [
              {
                id: 0,
                url: 'https://www.uvu.edu/',
                description: 'A link for production'
              }
            ]
          }
        ]
      }
    ];

    return { applications };
  }
}
