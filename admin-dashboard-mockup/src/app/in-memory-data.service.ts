import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {
    const applications = [
      { name: 'Progress Dashboard',
        code: 'PRGDB' },
      { name: 'Instances',
        code: 'INSTC' }
    ];

    const categories = [
      { appCode: 'PRGDB',
        category: 'FINAID',
        description: 'Financial Aid' },
        { appCode: 'PRGDB',
        category: 'REGIS',
        description: 'Registration' },
        { appCode: 'PRGDB',
        category: 'ADMIS',
        description: 'Admissions' },
        { appCode: 'INSTC',
        category: 'QA',
        description: 'QA' },
        { appCode: 'INSTC',
        category: 'DEV',
        description: 'Development' },
        { appCode: 'INSTC',
        category: 'PROD',
        description: 'Production' },
    ];

    const links = [
      { categCode: 'FINAID',
        url: 'https://www.uvu.edu/financialaid/',
        description: 'Blah blah blah' },
        { categCode: 'REGIS',
        url: 'https://www.uvu.edu/',
        description: 'Blah blah blah' },
        { categCode: 'ADMIS',
        url: 'https://www.uvu.edu/',
        description: 'Blah blah blah' },
        { categCode: 'INSTC',
        url: 'https://www.uvu.edu/',
        description: 'Blah blah blah' },
        { categCode: 'QA',
        url: 'https://www.uvu.edu/',
        description: 'Blah blah blah' },
        { categCode: 'DEV',
        url: 'https://www.uvu.edu/',
        description: 'Blah blah blah' },
        { categCode: 'PROD',
        url: 'https://www.uvu.edu/',
        description: 'Blah blah blah' }
    ]

    const app = {
      name: 'prog',
      code: 'something',
      categories: [
        {
          categCode: 'finaid',
          links: [
            {link1: '1'},
            {link2: '2'}
          ]
      }
      ]
    }
    return { applications, categories, links };
  }
}
