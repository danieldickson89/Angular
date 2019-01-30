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
                url: 'https://www.uvu.edu/',
                description: 'A link for Registration'
              },
              {
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
                url: 'https://www.uvu.edu/',
                description: 'A link for QA'
              },
              {
                url: 'https://www.qa-something.edu/',
                description: 'Another QA link'
              },
              {
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
