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
                description: 'Blah blah blah',
                links: [
                  {
                    url: 'https://www.uvu.edu/',
                    description: 'A link for Registration'
                  }
                ]
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
