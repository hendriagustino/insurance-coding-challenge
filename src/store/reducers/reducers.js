import * as actionTypes from '../actions/actionTypes';
import { bigIntLiteral } from '@babel/types';

const initialState = {
    "content": [
        {
            "plan": {
            "id": "5aca15c892450c050cad8413",
            "createdAt": 1507802445641,
            "lastModified": 1507882462183,
            "planName": "Asia Bronze",
            "insuranceProviderName": "HDFC Ergo General Insurance",
            "planDescription": null,
            "effectiveStartDate": null,
            "effectiveEndDate": null,
            "status": "ACTIVE",
            "claimsSettled": null,
            "featuredBenefits": [
              {
                "benefitId": "TTB0002",
                "benefitName": "Delay of Checked-in Baggage",
                "benefitIncluded": true,
                "benefitValue": "$ 100",
                "subCategory": null,
                "additionalDetails": null
              },
              {
                "benefitId": "TTB0001",
                "benefitName": "Loss of Baggage",
                "benefitIncluded": true,
                "benefitValue": "$ 150",
                "subCategory": null,
                "additionalDetails": null
              },
              {
                "benefitId": "TMB0005",
                "benefitName": "Personal Accident",
                "benefitIncluded": false,
                "benefitValue": "Not Covered",
                "subCategory": null,
                "additionalDetails": null
              },
              {
                "benefitId": "TTB0013",
                "benefitName": "Upgradation to Business Class",
                "benefitIncluded": false,
                "benefitValue": "Not Covered",
                "subCategory": null,
                "additionalDetails": null
              }
            ],
            "planBenefitCategories": {
              "MedicalFeatures": [
                {
                  "benefitId": "TMB0011",
                  "benefitName": "Cosmetic Surgery",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0006",
                  "benefitName": "Accidental Death & Disability (Common Carrier)",
                  "benefitIncluded": true,
                  "benefitValue": "$ 10,000",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0003",
                  "benefitName": "Out Patient Care",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0004",
                  "benefitName": "Existing Diseases Cover",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0009",
                  "benefitName": "Dental Cover",
                  "benefitIncluded": true,
                  "benefitValue": "$ 500",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "$ 150",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TMB0008",
                  "benefitName": "Repatrition of Mortal Remains",
                  "benefitIncluded": true,
                  "benefitValue": "Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0002",
                  "benefitName": "In Patient Care",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "$ 100 ",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TMB0005",
                  "benefitName": "Personal Accident",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0007",
                  "benefitName": "Medical Evacuation",
                  "benefitIncluded": true,
                  "benefitValue": "Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0001",
                  "benefitName": "Medical Cover",
                  "benefitIncluded": true,
                  "benefitValue": "Sum Insured",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "$ 100 ",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TMB0012",
                  "benefitName": "Hospital Daily Cash",
                  "benefitIncluded": true,
                  "benefitValue": "$ 10 per day, maximum 150 days",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "4 days",
                      "type": null
                    }
                  ]
                }
              ],
              "TravelFeatures": [
                {
                  "benefitId": "TTB0007",
                  "benefitName": "Cover for Home Content",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0004",
                  "benefitName": "Trip Cancellation",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0001",
                  "benefitName": "Loss of Baggage",
                  "benefitIncluded": true,
                  "benefitValue": "$ 150",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "$ 30",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0005",
                  "benefitName": "Contingency Travel Benefits",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0010",
                  "benefitName": "Compassionate Visit",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0016",
                  "benefitName": "Loss of Passport",
                  "benefitIncluded": true,
                  "benefitValue": "$ 300",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0006",
                  "benefitName": "Hijack Distress Allowance",
                  "benefitIncluded": true,
                  "benefitValue": "$ 75 per day/Max $ 450",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "1 day",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0008",
                  "benefitName": "Political Risk and Catastrophe Evacuation",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0011",
                  "benefitName": "Return of Minor Child",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0003",
                  "benefitName": "Trip Delay",
                  "benefitIncluded": true,
                  "benefitValue": "$ 10 per hrs/Max $ 120",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "6 Hours",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0014",
                  "benefitName": "Personal Liability",
                  "benefitIncluded": true,
                  "benefitValue": "$ 15,000",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "$ 200",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0015",
                  "benefitName": "Financial Emergency Cash",
                  "benefitIncluded": true,
                  "benefitValue": "$ 300",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0009",
                  "benefitName": "Missed Flight Connection",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0002",
                  "benefitName": "Delay of Checked Baggage",
                  "benefitIncluded": true,
                  "benefitValue": "$ 100",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "Max per Bag - 50%, per item - 10% of SI for all plans",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0012",
                  "benefitName": "Psychological Coverage",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0013",
                  "benefitName": "Upgradation to Business Class",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                }
              ]
            },
            "optionalPlanBenefits": null,
            "importantTerms": null,
            "online": true,
            "insurerRefDetails": null,
            "planType": "INDIVIDUAL",
            "sumInsureds": [
              15000
            ],
            "planEligibility": {
              "maxMembers": 1,
              "minMembers": 1,
              "maxChildren": 1,
              "minEntryAge": 1,
              "maxEntryAge": 70,
              "maxAdults": null,
              "minAdults": null,
              "adultQualifyingAge": 18,
              "medicalCheckUpCutOffAge": null,
              "minEntryAgeForChildInDays": 1,
              "maxEntryAgeForChild": 21,
              "minEntryAgeForChild": null,
              "serviceAreaIds": [
                "Asia"
              ],
              "singleTrip": true,
              "annualTrip": null,
              "longestTripDurationInDays": 180,
              "maxTripDurationInDays": 180,
              "additinalDetails": null,
              "mutualPlanExclusions": null
            },
            "planPrecedence": 0,
            "planFamily": null
          },
          "insuranceProviderId": "HDFC_ERGO",
          "sumInsured": 15000,
          "serviceAreaId": null,
          "totalAmount": {
            "amountType": "TOTAL",
            "amount": 353,
            "amountDescription": "TOTAL",
            "amountBreakUps": [
              {
                "amountType": "PREMIUM",
                "amount": 299,
                "amountDescription": "PREMIUM",
                "amountBreakUps": null,
                "amountValue": 299
              },
              {
                "amountType": "TAX",
                "amount": 53.82,
                "amountDescription": "SERVICE TAX",
                "amountBreakUps": null,
                "amountValue": 53.82
              },
              {
                "amountType": "OTHER",
                "amount": 0,
                "amountDescription": "CESS",
                "amountBreakUps": null,
                "amountValue": 0
              }
            ],
            "amountValue": 353
          },
          "longestTripDurationMax": null
        },
        {
          "plan": {
            "id": "586ec0fcc6eac0464bdd6335",
            "createdAt": 1483653372533,
            "lastModified": 1487146157687,
            "planName": "Explore Asia",
            "insuranceProviderName": "Religare Health Insurance",
            "planDescription": null,
            "effectiveStartDate": null,
            "effectiveEndDate": null,
            "status": "ACTIVE",
            "claimsSettled": null,
            "featuredBenefits": [
              {
                "benefitId": "TTB0001",
                "benefitName": "Loss of Baggage",
                "benefitIncluded": true,
                "benefitValue": "$ 100",
                "subCategory": null,
                "additionalDetails": null
              },
              {
                "benefitId": "TTB0013",
                "benefitName": "Upgradation to Business Class",
                "benefitIncluded": true,
                "benefitValue": "$ 1,000",
                "subCategory": null,
                "additionalDetails": null
              },
              {
                "benefitId": "TTB0002",
                "benefitName": "Delay of Checked-in Baggage",
                "benefitIncluded": true,
                "benefitValue": "$ 100",
                "subCategory": null,
                "additionalDetails": null
              },
              {
                "benefitId": "TMB0005",
                "benefitName": "Personal Accident",
                "benefitIncluded": true,
                "benefitValue": "$ 15,000",
                "subCategory": null,
                "additionalDetails": null
              }
            ],
            "planBenefitCategories": {
              "MedicalFeatures": [
                {
                  "benefitId": "TMB0011",
                  "benefitName": "Cosmetic Surgery",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0007",
                  "benefitName": "Medical Evacuation",
                  "benefitIncluded": true,
                  "benefitValue": "$ 10,000",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0012",
                  "benefitName": "Hospital Daily Cash",
                  "benefitIncluded": true,
                  "benefitValue": "$ 25 per day, maximum 5 days",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0008",
                  "benefitName": "Repatrition of Mortal Remains",
                  "benefitIncluded": true,
                  "benefitValue": "$ 10,000",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0004",
                  "benefitName": "Existing Diseases Cover",
                  "benefitIncluded": true,
                  "benefitValue": "Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0003",
                  "benefitName": "Out Patient Care",
                  "benefitIncluded": true,
                  "benefitValue": "20% of the Sum Insured",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0001",
                  "benefitName": "Medical Cover",
                  "benefitIncluded": true,
                  "benefitValue": "Sum Insured",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0009",
                  "benefitName": "Dental Cover",
                  "benefitIncluded": true,
                  "benefitValue": "$ 300",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "$ 100 ",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TMB0002",
                  "benefitName": "In Patient Care",
                  "benefitIncluded": true,
                  "benefitValue": "Sum Insured",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "$ 100 ",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TMB0006",
                  "benefitName": "Accidental Death & Disability (Common Carrier)",
                  "benefitIncluded": false,
                  "benefitValue": null,
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0005",
                  "benefitName": "Personal Accident",
                  "benefitIncluded": true,
                  "benefitValue": "$ 15,000",
                  "subCategory": null,
                  "additionalDetails": null
                }
              ],
              "TravelFeatures": [
                {
                  "benefitId": "TTB0007",
                  "benefitName": "Cover for Home Content",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0013",
                  "benefitName": "Upgradation to Business Class",
                  "benefitIncluded": true,
                  "benefitValue": "$ 1,000",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0002",
                  "benefitName": "Delay of Checked Baggage",
                  "benefitIncluded": true,
                  "benefitValue": "$ 100",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "12 Hours",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0005",
                  "benefitName": "Contingency Travel Benefits",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0010",
                  "benefitName": "Compassionate Visit",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0015",
                  "benefitName": "Financial Emergency Cash",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0016",
                  "benefitName": "Loss of Passport",
                  "benefitIncluded": true,
                  "benefitValue": "$ 300",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0001",
                  "benefitName": "Loss of Baggage",
                  "benefitIncluded": true,
                  "benefitValue": "$ 100",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0008",
                  "benefitName": "Political Risk and Catastrophe Evacuation",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0011",
                  "benefitName": "Return of Minor Child",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0003",
                  "benefitName": "Trip Delay",
                  "benefitIncluded": true,
                  "benefitValue": "$ 500",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "12 Hours",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0014",
                  "benefitName": "Personal Liability",
                  "benefitIncluded": true,
                  "benefitValue": "$ 100,000",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "$ 100",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0009",
                  "benefitName": "Missed Flight Connection",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0006",
                  "benefitName": "Hijack Distress Allowance",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0012",
                  "benefitName": "Psychological Coverage",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0004",
                  "benefitName": "Trip Cancellation",
                  "benefitIncluded": true,
                  "benefitValue": "$ 1,000",
                  "subCategory": null,
                  "additionalDetails": null
                }
              ]
            },
            "optionalPlanBenefits": null,
            "importantTerms": null,
            "online": true,
            "insurerRefDetails": null,
            "planType": "FLOATER",
            "sumInsureds": [
              50000,
              100000,
              25000
            ],
            "planEligibility": {
              "maxMembers": 1,
              "minMembers": 1,
              "maxChildren": 1,
              "minEntryAge": 0,
              "maxEntryAge": 90,
              "maxAdults": null,
              "minAdults": null,
              "adultQualifyingAge": 18,
              "medicalCheckUpCutOffAge": null,
              "minEntryAgeForChildInDays": 1,
              "maxEntryAgeForChild": 25,
              "minEntryAgeForChild": null,
              "serviceAreaIds": [
                "Asia"
              ],
              "singleTrip": true,
              "annualTrip": null,
              "longestTripDurationInDays": null,
              "maxTripDurationInDays": 180,
              "additinalDetails": null,
              "mutualPlanExclusions": null
            },
            "planPrecedence": 0,
            "planFamily": null
          },
          "insuranceProviderId": "RELIGARE_HEALTH",
          "sumInsured": 25000,
          "serviceAreaId": null,
          "totalAmount": {
            "amountType": "TOTAL",
            "amount": 392,
            "amountDescription": "TOTAL",
            "amountBreakUps": [
              {
                "amountType": "PREMIUM",
                "amount": 332,
                "amountDescription": "PREMIUM",
                "amountBreakUps": null,
                "amountValue": 332
              },
              {
                "amountType": "TAX",
                "amount": 59.76,
                "amountDescription": "SERVICE TAX",
                "amountBreakUps": null,
                "amountValue": 59.76
              },
              {
                "amountType": "OTHER",
                "amount": 0,
                "amountDescription": "CESS",
                "amountBreakUps": null,
                "amountValue": 0
              }
            ],
            "amountValue": 392
          },
          "longestTripDurationMax": null
        },
        {
          "plan": {
            "id": "5aca15c892450c050cad8424",
            "createdAt": 1507803120756,
            "lastModified": 1507884008237,
            "planName": "Bronze excluding US and Canada",
            "insuranceProviderName": "HDFC Ergo General Insurance",
            "planDescription": null,
            "effectiveStartDate": null,
            "effectiveEndDate": null,
            "status": "ACTIVE",
            "claimsSettled": null,
            "featuredBenefits": [
              {
                "benefitId": "TTB0001",
                "benefitName": "Loss of Baggage",
                "benefitIncluded": true,
                "benefitValue": "$ 250",
                "subCategory": null,
                "additionalDetails": null
              },
              {
                "benefitId": "TTB0002",
                "benefitName": "Delay of Checked-in Baggage",
                "benefitIncluded": true,
                "benefitValue": "$ 100",
                "subCategory": null,
                "additionalDetails": null
              },
              {
                "benefitId": "TMB0005",
                "benefitName": "Personal Accident",
                "benefitIncluded": false,
                "benefitValue": "Not Covered",
                "subCategory": null,
                "additionalDetails": null
              },
              {
                "benefitId": "TTB0013",
                "benefitName": "Upgradation to Business Class",
                "benefitIncluded": false,
                "benefitValue": "Not Covered",
                "subCategory": null,
                "additionalDetails": null
              }
            ],
            "planBenefitCategories": {
              "MedicalFeatures": [
                {
                  "benefitId": "TMB0011",
                  "benefitName": "Cosmetic Surgery",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0009",
                  "benefitName": "Dental Cover",
                  "benefitIncluded": true,
                  "benefitValue": "$ 300",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "$ 150",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TMB0006",
                  "benefitName": "Accidental Death & Disability (Common Carrier)",
                  "benefitIncluded": true,
                  "benefitValue": "$ 10,000",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0003",
                  "benefitName": "Out Patient Care",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0004",
                  "benefitName": "Existing Diseases Cover",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0008",
                  "benefitName": "Repatrition of Mortal Remains",
                  "benefitIncluded": true,
                  "benefitValue": "Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0002",
                  "benefitName": "In Patient Care",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": null,
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TMB0005",
                  "benefitName": "Personal Accident",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0007",
                  "benefitName": "Medical Evacuation",
                  "benefitIncluded": true,
                  "benefitValue": "Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0012",
                  "benefitName": "Hospital Daily Cash",
                  "benefitIncluded": true,
                  "benefitValue": "$ 15 per day, maximum 150 days",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "4 days",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TMB0001",
                  "benefitName": "Medical Cover",
                  "benefitIncluded": true,
                  "benefitValue": "Sum Insured",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "$ 100 ",
                      "type": null
                    }
                  ]
                }
              ],
              "TravelFeatures": [
                {
                  "benefitId": "TTB0007",
                  "benefitName": "Cover for Home Content",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0002",
                  "benefitName": "Delay of Checked Baggage",
                  "benefitIncluded": true,
                  "benefitValue": "$ 100",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "12 Hours/$10 per 8 Hours",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0004",
                  "benefitName": "Trip Cancellation",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0016",
                  "benefitName": "Loss of Passport",
                  "benefitIncluded": true,
                  "benefitValue": "$ 250",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0001",
                  "benefitName": "Loss of Baggage",
                  "benefitIncluded": true,
                  "benefitValue": "$ 1,000",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "Max 50% Per Bag/10% Per Item",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0005",
                  "benefitName": "Contingency Travel Benefits",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0010",
                  "benefitName": "Compassionate Visit",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0014",
                  "benefitName": "Personal Liability",
                  "benefitIncluded": true,
                  "benefitValue": "$ 50,000",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "$ 150",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0006",
                  "benefitName": "Hijack Distress Allowance",
                  "benefitIncluded": true,
                  "benefitValue": "$ 75 per day/Max $ 450",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "1 day",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0008",
                  "benefitName": "Political Risk and Catastrophe Evacuation",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0011",
                  "benefitName": "Return of Minor Child",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0003",
                  "benefitName": "Trip Delay",
                  "benefitIncluded": true,
                  "benefitValue": "$10 per Hour/Max 120",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "6 Hours",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0015",
                  "benefitName": "Financial Emergency Cash",
                  "benefitIncluded": true,
                  "benefitValue": "$ 300",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0009",
                  "benefitName": "Missed Flight Connection",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0012",
                  "benefitName": "Psychological Coverage",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0013",
                  "benefitName": "Upgradation to Business Class",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                }
              ]
            },
            "optionalPlanBenefits": null,
            "importantTerms": null,
            "online": true,
            "insurerRefDetails": null,
            "planType": "INDIVIDUAL",
            "sumInsureds": [
              30000
            ],
            "planEligibility": {
              "maxMembers": 1,
              "minMembers": 1,
              "maxChildren": 1,
              "minEntryAge": 1,
              "maxEntryAge": 70,
              "maxAdults": null,
              "minAdults": null,
              "adultQualifyingAge": 18,
              "medicalCheckUpCutOffAge": null,
              "minEntryAgeForChildInDays": 1,
              "maxEntryAgeForChild": 21,
              "minEntryAgeForChild": null,
              "serviceAreaIds": [
                "BAWorldwideNoUSCan"
              ],
              "singleTrip": true,
              "annualTrip": null,
              "longestTripDurationInDays": 180,
              "maxTripDurationInDays": 180,
              "additinalDetails": null,
              "mutualPlanExclusions": null
            },
            "planPrecedence": 0,
            "planFamily": null
          },
          "insuranceProviderId": "HDFC_ERGO",
          "sumInsured": 30000,
          "serviceAreaId": null,
          "totalAmount": {
            "amountType": "TOTAL",
            "amount": 402,
            "amountDescription": "TOTAL",
            "amountBreakUps": [
              {
                "amountType": "PREMIUM",
                "amount": 341,
                "amountDescription": "PREMIUM",
                "amountBreakUps": null,
                "amountValue": 341
              },
              {
                "amountType": "TAX",
                "amount": 61.38,
                "amountDescription": "SERVICE TAX",
                "amountBreakUps": null,
                "amountValue": 61.38
              },
              {
                "amountType": "OTHER",
                "amount": 0,
                "amountDescription": "CESS",
                "amountBreakUps": null,
                "amountValue": 0
              }
            ],
            "amountValue": 402
          },
          "longestTripDurationMax": null
        },
        {
          "plan": {
            "id": "5aca15c892450c050cad8427",
            "createdAt": 1507803240242,
            "lastModified": 1507884008237,
            "planName": "Silver excluding US and Canada",
            "insuranceProviderName": "HDFC Ergo General Insurance",
            "planDescription": null,
            "effectiveStartDate": null,
            "effectiveEndDate": null,
            "status": "ACTIVE",
            "claimsSettled": null,
            "featuredBenefits": [
              {
                "benefitId": "TTB0001",
                "benefitName": "Loss of Baggage",
                "benefitIncluded": true,
                "benefitValue": "$ 250",
                "subCategory": null,
                "additionalDetails": null
              },
              {
                "benefitId": "TTB0002",
                "benefitName": "Delay of Checked-in Baggage",
                "benefitIncluded": true,
                "benefitValue": "$ 100",
                "subCategory": null,
                "additionalDetails": null
              },
              {
                "benefitId": "TMB0005",
                "benefitName": "Personal Accident",
                "benefitIncluded": false,
                "benefitValue": "Not Covered",
                "subCategory": null,
                "additionalDetails": null
              },
              {
                "benefitId": "TTB0013",
                "benefitName": "Upgradation to Business Class",
                "benefitIncluded": false,
                "benefitValue": "Not Covered",
                "subCategory": null,
                "additionalDetails": null
              }
            ],
            "planBenefitCategories": {
              "MedicalFeatures": [
                {
                  "benefitId": "TMB0011",
                  "benefitName": "Cosmetic Surgery",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0009",
                  "benefitName": "Dental Cover",
                  "benefitIncluded": true,
                  "benefitValue": "$ 300",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "$ 150",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TMB0006",
                  "benefitName": "Accidental Death & Disability (Common Carrier)",
                  "benefitIncluded": true,
                  "benefitValue": "$ 10,000",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0003",
                  "benefitName": "Out Patient Care",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0004",
                  "benefitName": "Existing Diseases Cover",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0008",
                  "benefitName": "Repatrition of Mortal Remains",
                  "benefitIncluded": true,
                  "benefitValue": "Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0002",
                  "benefitName": "In Patient Care",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": null,
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TMB0005",
                  "benefitName": "Personal Accident",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0007",
                  "benefitName": "Medical Evacuation",
                  "benefitIncluded": true,
                  "benefitValue": "Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0012",
                  "benefitName": "Hospital Daily Cash",
                  "benefitIncluded": true,
                  "benefitValue": "$ 15 per day, maximum 150 days",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "4 days",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TMB0001",
                  "benefitName": "Medical Cover",
                  "benefitIncluded": true,
                  "benefitValue": "Sum Insured",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "$ 100 ",
                      "type": null
                    }
                  ]
                }
              ],
              "TravelFeatures": [
                {
                  "benefitId": "TTB0015",
                  "benefitName": "Financial Emergency Cash",
                  "benefitIncluded": true,
                  "benefitValue": "$ 500",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0007",
                  "benefitName": "Cover for Home Content",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0002",
                  "benefitName": "Delay of Checked Baggage",
                  "benefitIncluded": true,
                  "benefitValue": "$ 100",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "12 Hours/$10 per 8 Hours",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0004",
                  "benefitName": "Trip Cancellation",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0016",
                  "benefitName": "Loss of Passport",
                  "benefitIncluded": true,
                  "benefitValue": "$ 250",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0001",
                  "benefitName": "Loss of Baggage",
                  "benefitIncluded": true,
                  "benefitValue": "$ 1,000",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "Max 50% Per Bag/10% Per Item",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0005",
                  "benefitName": "Contingency Travel Benefits",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0010",
                  "benefitName": "Compassionate Visit",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0014",
                  "benefitName": "Personal Liability",
                  "benefitIncluded": true,
                  "benefitValue": "$ 100,000",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "$ 150",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0006",
                  "benefitName": "Hijack Distress Allowance",
                  "benefitIncluded": true,
                  "benefitValue": "$ 75 per day/Max $ 450",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "1 day",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0008",
                  "benefitName": "Political Risk and Catastrophe Evacuation",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0011",
                  "benefitName": "Return of Minor Child",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0003",
                  "benefitName": "Trip Delay",
                  "benefitIncluded": true,
                  "benefitValue": "$10 per Hour/Max 120",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "6 Hours",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0009",
                  "benefitName": "Missed Flight Connection",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0012",
                  "benefitName": "Psychological Coverage",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0013",
                  "benefitName": "Upgradation to Business Class",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                }
              ]
            },
            "optionalPlanBenefits": null,
            "importantTerms": null,
            "online": true,
            "insurerRefDetails": null,
            "planType": "INDIVIDUAL",
            "sumInsureds": [
              50000
            ],
            "planEligibility": {
              "maxMembers": 1,
              "minMembers": 1,
              "maxChildren": 1,
              "minEntryAge": 1,
              "maxEntryAge": 70,
              "maxAdults": null,
              "minAdults": null,
              "adultQualifyingAge": 18,
              "medicalCheckUpCutOffAge": null,
              "minEntryAgeForChildInDays": 1,
              "maxEntryAgeForChild": 21,
              "minEntryAgeForChild": null,
              "serviceAreaIds": [
                "BAWorldwideNoUSCan"
              ],
              "singleTrip": true,
              "annualTrip": null,
              "longestTripDurationInDays": 180,
              "maxTripDurationInDays": 180,
              "additinalDetails": null,
              "mutualPlanExclusions": null
            },
            "planPrecedence": 0,
            "planFamily": null
          },
          "insuranceProviderId": "HDFC_ERGO",
          "sumInsured": 50000,
          "serviceAreaId": null,
          "totalAmount": {
            "amountType": "TOTAL",
            "amount": 422,
            "amountDescription": "TOTAL",
            "amountBreakUps": [
              {
                "amountType": "PREMIUM",
                "amount": 358,
                "amountDescription": "PREMIUM",
                "amountBreakUps": null,
                "amountValue": 358
              },
              {
                "amountType": "TAX",
                "amount": 64.44,
                "amountDescription": "SERVICE TAX",
                "amountBreakUps": null,
                "amountValue": 64.44
              },
              {
                "amountType": "OTHER",
                "amount": 0,
                "amountDescription": "CESS",
                "amountBreakUps": null,
                "amountValue": 0
              }
            ],
            "amountValue": 422
          },
          "longestTripDurationMax": null
        },
        {
          "plan": {
            "id": "586ec14ec6eac0464bdd633a",
            "createdAt": 1483653454238,
            "lastModified": 1487145848309,
            "planName": "Explore Platinum Worldwide",
            "insuranceProviderName": "Religare Health Insurance",
            "planDescription": null,
            "effectiveStartDate": null,
            "effectiveEndDate": null,
            "status": "ACTIVE",
            "claimsSettled": null,
            "featuredBenefits": [
              {
                "benefitId": "TTB0001",
                "benefitName": "Loss of Baggage",
                "benefitIncluded": true,
                "benefitValue": "$ 100",
                "subCategory": null,
                "additionalDetails": null
              },
              {
                "benefitId": "TTB0013",
                "benefitName": "Upgradation to Business Class",
                "benefitIncluded": true,
                "benefitValue": "$ 1,000",
                "subCategory": null,
                "additionalDetails": null
              },
              {
                "benefitId": "TTB0002",
                "benefitName": "Delay of Checked-in Baggage",
                "benefitIncluded": true,
                "benefitValue": "$ 100",
                "subCategory": null,
                "additionalDetails": null
              },
              {
                "benefitId": "TMB0005",
                "benefitName": "Personal Accident",
                "benefitIncluded": true,
                "benefitValue": "$ 15,000",
                "subCategory": null,
                "additionalDetails": null
              }
            ],
            "planBenefitCategories": {
              "MedicalFeatures": [
                {
                  "benefitId": "TMB0006",
                  "benefitName": "Accidental Death & Disability (Common Carrier)",
                  "benefitIncluded": true,
                  "benefitValue": "$ 5000",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0011",
                  "benefitName": "Cosmetic Surgery",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0003",
                  "benefitName": "Out Patient Care",
                  "benefitIncluded": true,
                  "benefitValue": "$ 50,000",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0004",
                  "benefitName": "Existing Diseases Cover",
                  "benefitIncluded": true,
                  "benefitValue": "Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0001",
                  "benefitName": "Medical Cover",
                  "benefitIncluded": true,
                  "benefitValue": "Sum Insured",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0009",
                  "benefitName": "Dental Cover",
                  "benefitIncluded": true,
                  "benefitValue": "$ 300",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "$ 100 ",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TMB0002",
                  "benefitName": "In Patient Care",
                  "benefitIncluded": true,
                  "benefitValue": "Sum Insured",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "$ 100 ",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TMB0007",
                  "benefitName": "Medical Evacuation",
                  "benefitIncluded": true,
                  "benefitValue": "$ 50,000",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0008",
                  "benefitName": "Repatrition of Mortal Remains",
                  "benefitIncluded": true,
                  "benefitValue": "$ 50,000",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0005",
                  "benefitName": "Personal Accident",
                  "benefitIncluded": true,
                  "benefitValue": "$ 15,000",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0012",
                  "benefitName": "Hospital Daily Cash",
                  "benefitIncluded": true,
                  "benefitValue": "$ 25 per day, maximum 5 days",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "2 Days",
                      "type": null
                    }
                  ]
                }
              ],
              "TravelFeatures": [
                {
                  "benefitId": "TTB0007",
                  "benefitName": "Cover for Home Content",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0013",
                  "benefitName": "Upgradation to Business Class",
                  "benefitIncluded": true,
                  "benefitValue": "$ 1,000",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0002",
                  "benefitName": "Delay of Checked Baggage",
                  "benefitIncluded": true,
                  "benefitValue": "$ 100",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "12 Hours",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0005",
                  "benefitName": "Contingency Travel Benefits",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0015",
                  "benefitName": "Financial Emergency Cash",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0016",
                  "benefitName": "Loss of Passport",
                  "benefitIncluded": true,
                  "benefitValue": "$ 300",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0001",
                  "benefitName": "Loss of Baggage",
                  "benefitIncluded": true,
                  "benefitValue": "$ 100",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0008",
                  "benefitName": "Political Risk and Catastrophe Evacuation",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0010",
                  "benefitName": "Compassionate Visit",
                  "benefitIncluded": true,
                  "benefitValue": "$ 5,000",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0003",
                  "benefitName": "Trip Delay",
                  "benefitIncluded": true,
                  "benefitValue": "$ 500",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "12 Hours",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0014",
                  "benefitName": "Personal Liability",
                  "benefitIncluded": true,
                  "benefitValue": "$ 100,000",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "$ 100",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0009",
                  "benefitName": "Missed Flight Connection",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0006",
                  "benefitName": "Hijack Distress Allowance",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0011",
                  "benefitName": "Return of Minor Child",
                  "benefitIncluded": true,
                  "benefitValue": "$ 2,000",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0012",
                  "benefitName": "Psychological Coverage",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0004",
                  "benefitName": "Trip Cancellation",
                  "benefitIncluded": true,
                  "benefitValue": "$ 1,000",
                  "subCategory": null,
                  "additionalDetails": null
                }
              ]
            },
            "optionalPlanBenefits": null,
            "importantTerms": null,
            "online": true,
            "insurerRefDetails": null,
            "planType": "FLOATER",
            "sumInsureds": [
              50000,
              100000,
              300000,
              500000
            ],
            "planEligibility": {
              "maxMembers": 1,
              "minMembers": 1,
              "maxChildren": 1,
              "minEntryAge": 0,
              "maxEntryAge": 90,
              "maxAdults": null,
              "minAdults": null,
              "adultQualifyingAge": 18,
              "medicalCheckUpCutOffAge": null,
              "minEntryAgeForChildInDays": 1,
              "maxEntryAgeForChild": 25,
              "minEntryAgeForChild": null,
              "serviceAreaIds": [
                "World"
              ],
              "singleTrip": true,
              "annualTrip": null,
              "longestTripDurationInDays": null,
              "maxTripDurationInDays": 180,
              "additionalDetails": null,
              "mutualPlanExclusions": null
            },
            "planPrecedence": 0,
            "planFamily": null
          },
          "insuranceProviderId": "RELIGARE_HEALTH",
          "sumInsured": 50000,
          "serviceAreaId": null,
          "totalAmount": {
            "amountType": "TOTAL",
            "amount": 978,
            "amountDescription": "TOTAL",
            "amountBreakUps": [
              {
                "amountType": "PREMIUM",
                "amount": 829,
                "amountDescription": "PREMIUM",
                "amountBreakUps": null,
                "amountValue": 829
              },
              {
                "amountType": "TAX",
                "amount": 149.22,
                "amountDescription": "SERVICE TAX",
                "amountBreakUps": null,
                "amountValue": 149.22
              },
              {
                "amountType": "OTHER",
                "amount": 0,
                "amountDescription": "CESS",
                "amountBreakUps": null,
                "amountValue": 0
              }
            ],
            "amountValue": 978
          },
          "longestTripDurationMax": null
        },
        {
          "plan": {
            "id": "586f4e84c6eac0464bddab5d",
            "createdAt": 1483689604746,
            "lastModified": 1486674831494,
            "planName": "Asia Standard",
            "insuranceProviderName": "Reliance Health Insurance",
            "planDescription": null,
            "effectiveStartDate": null,
            "effectiveEndDate": null,
            "status": "ACTIVE",
            "claimsSettled": null,
            "featuredBenefits": [
              {
                "benefitId": "TMB0005",
                "benefitName": "Personal Accident",
                "benefitIncluded": true,
                "benefitValue": "$ 7,500",
                "subCategory": null,
                "additionalDetails": null
              },
              {
                "benefitId": "TTB0001",
                "benefitName": "Loss of Baggage",
                "benefitIncluded": false,
                "benefitValue": "Not Covered",
                "subCategory": null,
                "additionalDetails": null
              },
              {
                "benefitId": "TTB0002",
                "benefitName": "Delay of Checked-in Baggage",
                "benefitIncluded": true,
                "benefitValue": "$ 100",
                "subCategory": null,
                "additionalDetails": null
              },
              {
                "benefitId": "TTB0013",
                "benefitName": "Upgradation to Business Class",
                "benefitIncluded": false,
                "benefitValue": "Not Covered",
                "subCategory": null,
                "additionalDetails": null
              }
            ],
            "planBenefitCategories": {
              "MedicalFeatures": [
                {
                  "benefitId": "TMB0011",
                  "benefitName": "Cosmetic Surgery",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0005",
                  "benefitName": "Personal Accident",
                  "benefitIncluded": true,
                  "benefitValue": "$ 7,500",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0001",
                  "benefitName": "Medical Cover",
                  "benefitIncluded": true,
                  "benefitValue": "25,000",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0004",
                  "benefitName": "Existing Diseases Cover",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0008",
                  "benefitName": "Repatrition of Mortal Remains",
                  "benefitIncluded": true,
                  "benefitValue": "Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0003",
                  "benefitName": "Out Patient Care",
                  "benefitIncluded": true,
                  "benefitValue": "Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0002",
                  "benefitName": "In Patient Care",
                  "benefitIncluded": true,
                  "benefitValue": "Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0006",
                  "benefitName": "Accidental Death & Disability (Common Carrier)",
                  "benefitIncluded": true,
                  "benefitValue": "$ 2,500",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0009",
                  "benefitName": "Dental Cover",
                  "benefitIncluded": true,
                  "benefitValue": "$ 500",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "$ 50 ",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TMB0007",
                  "benefitName": "Medical Evacuation",
                  "benefitIncluded": true,
                  "benefitValue": "Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0012",
                  "benefitName": "Hospital Daily Cash",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                }
              ],
              "TravelFeatures": [
                {
                  "benefitId": "TTB0015",
                  "benefitName": "Financial Emergency Cash",
                  "benefitIncluded": true,
                  "benefitValue": "$ 500",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0007",
                  "benefitName": "Cover for Home Content",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0006",
                  "benefitName": "Hijack Distress Allowance",
                  "benefitIncluded": true,
                  "benefitValue": "$ 50 per day",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "12 Hours",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0002",
                  "benefitName": "Delay of Checked Baggage",
                  "benefitIncluded": true,
                  "benefitValue": "$ 100",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "12 Hours",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0005",
                  "benefitName": "Contingency Travel Benefits",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0003",
                  "benefitName": "Trip Delay",
                  "benefitIncluded": true,
                  "benefitValue": "$ 25 per day",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "12 Hours",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0010",
                  "benefitName": "Compassionate Visit",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0014",
                  "benefitName": "Personal Liability",
                  "benefitIncluded": true,
                  "benefitValue": "$ 10,000",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0008",
                  "benefitName": "Political Risk and Catastrophe Evacuation",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0011",
                  "benefitName": "Return of Minor Child",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0009",
                  "benefitName": "Missed Flight Connection",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0016",
                  "benefitName": "Loss of Passport",
                  "benefitIncluded": true,
                  "benefitValue": "$ 100",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "$ 25",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0001",
                  "benefitName": "Loss of Baggage",
                  "benefitIncluded": true,
                  "benefitValue": "Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0012",
                  "benefitName": "Psychological Coverage",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0004",
                  "benefitName": "Trip Cancellation",
                  "benefitIncluded": true,
                  "benefitValue": "$ 1,000",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0013",
                  "benefitName": "Upgradation to Business Class",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                }
              ]
            },
            "optionalPlanBenefits": null,
            "importantTerms": null,
            "online": true,
            "insurerRefDetails": null,
            "planType": "FLOATER",
            "sumInsureds": [
              25000
            ],
            "planEligibility": {
              "maxMembers": 1,
              "minMembers": 1,
              "maxChildren": 1,
              "minEntryAge": 0,
              "maxEntryAge": 70,
              "maxAdults": null,
              "minAdults": null,
              "adultQualifyingAge": 18,
              "medicalCheckUpCutOffAge": null,
              "minEntryAgeForChildInDays": 1,
              "maxEntryAgeForChild": 25,
              "minEntryAgeForChild": null,
              "serviceAreaIds": [
                "Asia"
              ],
              "singleTrip": true,
              "annualTrip": null,
              "longestTripDurationInDays": null,
              "maxTripDurationInDays": 30,
              "additinalDetails": null,
              "mutualPlanExclusions": null
            },
            "planPrecedence": 0,
            "planFamily": null
          },
          "insuranceProviderId": "RELIANCE_GENERAL",
          "sumInsured": 25000,
          "serviceAreaId": null,
          "totalAmount": {
            "amountType": "TOTAL",
            "amount": 592,
            "amountDescription": "TOTAL",
            "amountBreakUps": [
              {
                "amountType": "PREMIUM",
                "amount": 502,
                "amountDescription": "PREMIUM",
                "amountBreakUps": null,
                "amountValue": 502
              },
              {
                "amountType": "TAX",
                "amount": 90.36,
                "amountDescription": "SERVICE TAX",
                "amountBreakUps": null,
                "amountValue": 90.36
              },
              {
                "amountType": "OTHER",
                "amount": 0,
                "amountDescription": "CESS",
                "amountBreakUps": null,
                "amountValue": 0
              }
            ],
            "amountValue": 592
          },
          "longestTripDurationMax": null
        },
        {
          "plan": {
            "id": "586ec12fc6eac0464bdd6338",
            "createdAt": 1483653423455,
            "lastModified": 1487145763843,
            "planName": "Explore Gold Worldwide Excluding US and Canada",
            "insuranceProviderName": "Religare Health Insurance",
            "planDescription": null,
            "effectiveStartDate": null,
            "effectiveEndDate": null,
            "status": "ACTIVE",
            "claimsSettled": null,
            "featuredBenefits": [
              {
                "benefitId": "TTB0001",
                "benefitName": "Loss of Baggage",
                "benefitIncluded": true,
                "benefitValue": "$ 100",
                "subCategory": null,
                "additionalDetails": null
              },
              {
                "benefitId": "TTB0013",
                "benefitName": "Upgradation to Business Class",
                "benefitIncluded": true,
                "benefitValue": "$ 1,000",
                "subCategory": null,
                "additionalDetails": null
              },
              {
                "benefitId": "TTB0002",
                "benefitName": "Delay of Checked-in Baggage",
                "benefitIncluded": true,
                "benefitValue": "$ 100",
                "subCategory": null,
                "additionalDetails": null
              },
              {
                "benefitId": "TMB0005",
                "benefitName": "Personal Accident",
                "benefitIncluded": true,
                "benefitValue": "$ 15,000",
                "subCategory": null,
                "additionalDetails": null
              }
            ],
            "planBenefitCategories": {
              "MedicalFeatures": [
                {
                  "benefitId": "TMB0011",
                  "benefitName": "Cosmetic Surgery",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0003",
                  "benefitName": "Out Patient Care",
                  "benefitIncluded": true,
                  "benefitValue": "$ 50,000",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0004",
                  "benefitName": "Existing Diseases Cover",
                  "benefitIncluded": true,
                  "benefitValue": "Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0001",
                  "benefitName": "Medical Cover",
                  "benefitIncluded": true,
                  "benefitValue": "Sum Insured",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0009",
                  "benefitName": "Dental Cover",
                  "benefitIncluded": true,
                  "benefitValue": "$ 300",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "$ 100 ",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TMB0002",
                  "benefitName": "In Patient Care",
                  "benefitIncluded": true,
                  "benefitValue": "Sum Insured",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "$ 100 ",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TMB0007",
                  "benefitName": "Medical Evacuation",
                  "benefitIncluded": true,
                  "benefitValue": "$ 50,000",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0008",
                  "benefitName": "Repatrition of Mortal Remains",
                  "benefitIncluded": true,
                  "benefitValue": "$ 50,000",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0006",
                  "benefitName": "Accidental Death & Disability (Common Carrier)",
                  "benefitIncluded": false,
                  "benefitValue": null,
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0005",
                  "benefitName": "Personal Accident",
                  "benefitIncluded": true,
                  "benefitValue": "$ 15,000",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0012",
                  "benefitName": "Hospital Daily Cash",
                  "benefitIncluded": true,
                  "benefitValue": "$ 25 per day, maximum 5 days",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "2 Days",
                      "type": null
                    }
                  ]
                }
              ],
              "TravelFeatures": [
                {
                  "benefitId": "TTB0007",
                  "benefitName": "Cover for Home Content",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0013",
                  "benefitName": "Upgradation to Business Class",
                  "benefitIncluded": true,
                  "benefitValue": "$ 1,000",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0002",
                  "benefitName": "Delay of Checked Baggage",
                  "benefitIncluded": true,
                  "benefitValue": "$ 100",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "12 Hours",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0005",
                  "benefitName": "Contingency Travel Benefits",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0010",
                  "benefitName": "Compassionate Visit",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0015",
                  "benefitName": "Financial Emergency Cash",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0016",
                  "benefitName": "Loss of Passport",
                  "benefitIncluded": true,
                  "benefitValue": "$ 300",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0001",
                  "benefitName": "Loss of Baggage",
                  "benefitIncluded": true,
                  "benefitValue": "$ 100",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0008",
                  "benefitName": "Political Risk and Catastrophe Evacuation",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0011",
                  "benefitName": "Return of Minor Child",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0003",
                  "benefitName": "Trip Delay",
                  "benefitIncluded": true,
                  "benefitValue": "$ 500",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "12 Hours",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0014",
                  "benefitName": "Personal Liability",
                  "benefitIncluded": true,
                  "benefitValue": "$ 100,000",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "$ 100",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0009",
                  "benefitName": "Missed Flight Connection",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0006",
                  "benefitName": "Hijack Distress Allowance",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0012",
                  "benefitName": "Psychological Coverage",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0004",
                  "benefitName": "Trip Cancellation",
                  "benefitIncluded": true,
                  "benefitValue": "$ 1,000",
                  "subCategory": null,
                  "additionalDetails": null
                }
              ]
            },
            "optionalPlanBenefits": null,
            "importantTerms": null,
            "online": true,
            "insurerRefDetails": null,
            "planType": "FLOATER",
            "sumInsureds": [
              50000,
              100000,
              300000,
              500000
            ],
            "planEligibility": {
              "maxMembers": 1,
              "minMembers": 1,
              "maxChildren": 1,
              "minEntryAge": 0,
              "maxEntryAge": 90,
              "maxAdults": null,
              "minAdults": null,
              "adultQualifyingAge": 18,
              "medicalCheckUpCutOffAge": null,
              "minEntryAgeForChildInDays": 1,
              "maxEntryAgeForChild": 25,
              "minEntryAgeForChild": null,
              "serviceAreaIds": [
                "NonUSCanada"
              ],
              "singleTrip": true,
              "annualTrip": null,
              "longestTripDurationInDays": null,
              "maxTripDurationInDays": 180,
              "additinalDetails": null,
              "mutualPlanExclusions": null
            },
            "planPrecedence": 0,
            "planFamily": null
          },
          "insuranceProviderId": "RELIGARE_HEALTH",
          "sumInsured": 50000,
          "serviceAreaId": null,
          "totalAmount": {
            "amountType": "TOTAL",
            "amount": 607,
            "amountDescription": "TOTAL",
            "amountBreakUps": [
              {
                "amountType": "PREMIUM",
                "amount": 514,
                "amountDescription": "PREMIUM",
                "amountBreakUps": null,
                "amountValue": 514
              },
              {
                "amountType": "TAX",
                "amount": 92.52,
                "amountDescription": "SERVICE TAX",
                "amountBreakUps": null,
                "amountValue": 92.52
              },
              {
                "amountType": "OTHER",
                "amount": 0,
                "amountDescription": "CESS",
                "amountBreakUps": null,
                "amountValue": 0
              }
            ],
            "amountValue": 607
          },
          "longestTripDurationMax": null
        },
        {
          "plan": {
            "id": "586f4e74c6eac0464bddab5c",
            "createdAt": 1483689588221,
            "lastModified": 1486674772724,
            "planName": "Asia Silver",
            "insuranceProviderName": "Reliance Health Insurance",
            "planDescription": null,
            "effectiveStartDate": null,
            "effectiveEndDate": null,
            "status": "ACTIVE",
            "claimsSettled": null,
            "featuredBenefits": [
              {
                "benefitId": "TMB0005",
                "benefitName": "Personal Accident",
                "benefitIncluded": true,
                "benefitValue": "$ 7,500",
                "subCategory": null,
                "additionalDetails": null
              },
              {
                "benefitId": "TTB0001",
                "benefitName": "Loss of Baggage",
                "benefitIncluded": false,
                "benefitValue": "Not Covered",
                "subCategory": null,
                "additionalDetails": null
              },
              {
                "benefitId": "TTB0002",
                "benefitName": "Delay of Checked-in Baggage",
                "benefitIncluded": true,
                "benefitValue": "$ 100",
                "subCategory": null,
                "additionalDetails": null
              },
              {
                "benefitId": "TTB0013",
                "benefitName": "Upgradation to Business Class",
                "benefitIncluded": false,
                "benefitValue": "Not Covered",
                "subCategory": null,
                "additionalDetails": null
              }
            ],
            "planBenefitCategories": {
              "MedicalFeatures": [
                {
                  "benefitId": "TMB0011",
                  "benefitName": "Cosmetic Surgery",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0005",
                  "benefitName": "Personal Accident",
                  "benefitIncluded": true,
                  "benefitValue": "$ 7,500",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0004",
                  "benefitName": "Existing Diseases Cover",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0001",
                  "benefitName": "Medical Cover",
                  "benefitIncluded": true,
                  "benefitValue": "30,000",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0008",
                  "benefitName": "Repatrition of Mortal Remains",
                  "benefitIncluded": true,
                  "benefitValue": "Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0003",
                  "benefitName": "Out Patient Care",
                  "benefitIncluded": true,
                  "benefitValue": "Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0002",
                  "benefitName": "In Patient Care",
                  "benefitIncluded": true,
                  "benefitValue": "Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0006",
                  "benefitName": "Accidental Death & Disability (Common Carrier)",
                  "benefitIncluded": true,
                  "benefitValue": "$ 2,500",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0009",
                  "benefitName": "Dental Cover",
                  "benefitIncluded": true,
                  "benefitValue": "$ 500",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "$ 50 ",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TMB0007",
                  "benefitName": "Medical Evacuation",
                  "benefitIncluded": true,
                  "benefitValue": "Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0012",
                  "benefitName": "Hospital Daily Cash",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                }
              ],
              "TravelFeatures": [
                {
                  "benefitId": "TTB0006",
                  "benefitName": "Hijack Distress Allowance",
                  "benefitIncluded": true,
                  "benefitValue": "$ 60 per day",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "12 Hours",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0015",
                  "benefitName": "Financial Emergency Cash",
                  "benefitIncluded": true,
                  "benefitValue": "$ 500",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0007",
                  "benefitName": "Cover for Home Content",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0002",
                  "benefitName": "Delay of Checked Baggage",
                  "benefitIncluded": true,
                  "benefitValue": "$ 100",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "12 Hours",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0005",
                  "benefitName": "Contingency Travel Benefits",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0003",
                  "benefitName": "Trip Delay",
                  "benefitIncluded": true,
                  "benefitValue": "$ 25 per day",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "12 Hours",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0010",
                  "benefitName": "Compassionate Visit",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0014",
                  "benefitName": "Personal Liability",
                  "benefitIncluded": true,
                  "benefitValue": "$ 10,000",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0008",
                  "benefitName": "Political Risk and Catastrophe Evacuation",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0011",
                  "benefitName": "Return of Minor Child",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0009",
                  "benefitName": "Missed Flight Connection",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0016",
                  "benefitName": "Loss of Passport",
                  "benefitIncluded": true,
                  "benefitValue": "$ 100",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "$ 25",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0001",
                  "benefitName": "Loss of Baggage",
                  "benefitIncluded": true,
                  "benefitValue": "Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0012",
                  "benefitName": "Psychological Coverage",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0004",
                  "benefitName": "Trip Cancellation",
                  "benefitIncluded": true,
                  "benefitValue": "$ 1,000",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0013",
                  "benefitName": "Upgradation to Business Class",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                }
              ]
            },
            "optionalPlanBenefits": null,
            "importantTerms": null,
            "online": true,
            "insurerRefDetails": null,
            "planType": "FLOATER",
            "sumInsureds": [
              30000
            ],
            "planEligibility": {
              "maxMembers": 1,
              "minMembers": 1,
              "maxChildren": 1,
              "minEntryAge": 0,
              "maxEntryAge": 70,
              "maxAdults": null,
              "minAdults": null,
              "adultQualifyingAge": 18,
              "medicalCheckUpCutOffAge": null,
              "minEntryAgeForChildInDays": 1,
              "maxEntryAgeForChild": 25,
              "minEntryAgeForChild": null,
              "serviceAreaIds": [
                "Asia"
              ],
              "singleTrip": true,
              "annualTrip": null,
              "longestTripDurationInDays": null,
              "maxTripDurationInDays": 30,
              "additinalDetails": null,
              "mutualPlanExclusions": null
            },
            "planPrecedence": 0,
            "planFamily": null
          },
          "insuranceProviderId": "RELIANCE_GENERAL",
          "sumInsured": 30000,
          "serviceAreaId": null,
          "totalAmount": {
            "amountType": "TOTAL",
            "amount": 631,
            "amountDescription": "TOTAL",
            "amountBreakUps": [
              {
                "amountType": "PREMIUM",
                "amount": 535,
                "amountDescription": "PREMIUM",
                "amountBreakUps": null,
                "amountValue": 535
              },
              {
                "amountType": "TAX",
                "amount": 96.3,
                "amountDescription": "SERVICE TAX",
                "amountBreakUps": null,
                "amountValue": 96.3
              },
              {
                "amountType": "OTHER",
                "amount": 0,
                "amountDescription": "CESS",
                "amountBreakUps": null,
                "amountValue": 0
              }
            ],
            "amountValue": 631
          },
          "longestTripDurationMax": null
        },
        {
          "plan": {
            "id": "58809422c6eac03f8ea4fb31",
            "createdAt": 1484821538762,
            "lastModified": 1486706055453,
            "planName": "Reliance Standard Worldwide",
            "insuranceProviderName": "Reliance Health Insurance",
            "planDescription": null,
            "effectiveStartDate": null,
            "effectiveEndDate": null,
            "status": "ACTIVE",
            "claimsSettled": null,
            "featuredBenefits": [
              {
                "benefitId": "TTB0002",
                "benefitName": "Delay of Checked-in Baggage",
                "benefitIncluded": true,
                "benefitValue": "$ 100",
                "subCategory": null,
                "additionalDetails": null
              },
              {
                "benefitId": "TTB0001",
                "benefitName": "Loss of Baggage",
                "benefitIncluded": true,
                "benefitValue": "$ 500",
                "subCategory": null,
                "additionalDetails": null
              },
              {
                "benefitId": "TMB0005",
                "benefitName": "Personal Accident",
                "benefitIncluded": true,
                "benefitValue": "$ 15,000",
                "subCategory": null,
                "additionalDetails": null
              },
              {
                "benefitId": "TTB0013",
                "benefitName": "Upgradation to Business Class",
                "benefitIncluded": false,
                "benefitValue": "Not Covered",
                "subCategory": null,
                "additionalDetails": null
              }
            ],
            "planBenefitCategories": {
              "MedicalFeatures": [
                {
                  "benefitId": "TMB0011",
                  "benefitName": "Cosmetic Surgery",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0004",
                  "benefitName": "Existing Diseases Cover",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0008",
                  "benefitName": "Repatrition of Mortal Remains",
                  "benefitIncluded": true,
                  "benefitValue": "Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0003",
                  "benefitName": "Out Patient Care",
                  "benefitIncluded": true,
                  "benefitValue": "Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0002",
                  "benefitName": "In Patient Care",
                  "benefitIncluded": true,
                  "benefitValue": "Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0006",
                  "benefitName": "Accidental Death & Disability (Common Carrier)",
                  "benefitIncluded": true,
                  "benefitValue": "$ 2,500",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0005",
                  "benefitName": "Personal Accident",
                  "benefitIncluded": true,
                  "benefitValue": "$ 15,000",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0009",
                  "benefitName": "Dental Cover",
                  "benefitIncluded": true,
                  "benefitValue": "$ 500",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "$ 50 ",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TMB0007",
                  "benefitName": "Medical Evacuation",
                  "benefitIncluded": true,
                  "benefitValue": "Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0012",
                  "benefitName": "Hospital Daily Cash",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TMB0001",
                  "benefitName": "Medical Cover",
                  "benefitIncluded": true,
                  "benefitValue": "50,000",
                  "subCategory": null,
                  "additionalDetails": null
                }
              ],
              "TravelFeatures": [
                {
                  "benefitId": "TTB0014",
                  "benefitName": "Personal Liability",
                  "benefitIncluded": true,
                  "benefitValue": "$ 50,000",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0007",
                  "benefitName": "Cover for Home Content",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0004",
                  "benefitName": "Trip Cancellation",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0002",
                  "benefitName": "Delay of Checked Baggage",
                  "benefitIncluded": true,
                  "benefitValue": "$ 100",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "12 Hours",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0003",
                  "benefitName": "Trip Delay",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0005",
                  "benefitName": "Contingency Travel Benefits",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0010",
                  "benefitName": "Compassionate Visit",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0015",
                  "benefitName": "Financial Emergency Cash",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0016",
                  "benefitName": "Loss of Passport",
                  "benefitIncluded": true,
                  "benefitValue": "$ 300",
                  "subCategory": null,
                  "additionalDetails": [
                    {
                      "key": "deductible",
                      "value": "$ 25",
                      "type": null
                    }
                  ]
                },
                {
                  "benefitId": "TTB0008",
                  "benefitName": "Political Risk and Catastrophe Evacuation",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0011",
                  "benefitName": "Return of Minor Child",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0009",
                  "benefitName": "Missed Flight Connection",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0001",
                  "benefitName": "Loss of Baggage",
                  "benefitIncluded": true,
                  "benefitValue": "$ 500",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0006",
                  "benefitName": "Hijack Distress Allowance",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0012",
                  "benefitName": "Psychological Coverage",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                },
                {
                  "benefitId": "TTB0013",
                  "benefitName": "Upgradation to Business Class",
                  "benefitIncluded": false,
                  "benefitValue": "Not Covered",
                  "subCategory": null,
                  "additionalDetails": null
                }
              ]
            },
            "optionalPlanBenefits": null,
            "importantTerms": null,
            "online": true,
            "insurerRefDetails": null,
            "planType": "INDIVIDUAL",
            "sumInsureds": [
              50000
            ],
            "planEligibility": {
              "maxMembers": 1,
              "minMembers": 1,
              "maxChildren": 1,
              "minEntryAge": 0,
              "maxEntryAge": 70,
              "maxAdults": 1,
              "minAdults": null,
              "adultQualifyingAge": 18,
              "medicalCheckUpCutOffAge": null,
              "minEntryAgeForChildInDays": 1,
              "maxEntryAgeForChild": 25,
              "minEntryAgeForChild": null,
              "serviceAreaIds": [
                "World"
              ],
              "singleTrip": true,
              "annualTrip": null,
              "longestTripDurationInDays": null,
              "maxTripDurationInDays": 182,
              "additinalDetails": null,
              "mutualPlanExclusions": null
            },
            "planPrecedence": 0,
            "planFamily": null
          },
          "insuranceProviderId": "RELIANCE_GENERAL",
          "sumInsured": 50000,
          "serviceAreaId": null,
          "totalAmount": {
            "amountType": "TOTAL",
            "amount": 940,
            "amountDescription": "TOTAL",
            "amountBreakUps": [
              {
                "amountType": "PREMIUM",
                "amount": 797,
                "amountDescription": "PREMIUM",
                "amountBreakUps": null,
                "amountValue": 797
              },
              {
                "amountType": "TAX",
                "amount": 143.46,
                "amountDescription": "SERVICE TAX",
                "amountBreakUps": null,
                "amountValue": 143.46
              },
              {
                "amountType": "OTHER",
                "amount": 0,
                "amountDescription": "CESS",
                "amountBreakUps": null,
                "amountValue": 0
              }
            ],
            "amountValue": 940
          },
          "longestTripDurationMax": null
        }
      ],
      "last": true,
      "numberOfElements": 18,
      "sort": null,
      "first": true,
      "size": 0,
      "number": 0,
      "productDetailPageId": null,
      "selected" : []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ON_PRODUCT_CLICKED:
            return {
                  ...state,
                  productDetailPageId: action.id
                };
        case actionTypes.ON_COMPARE_CLICKED:
                
            const newId = (state.selected.filter( key => {
                          return key === action.id}
                        ));
                       
            if( newId.length !== 0 ){
              alert('ID has been inserted');
              return state;
            }

            if (newId.length === 0 ){
              return {...state, selected: state.selected.concat(action.id)}
            }

            break;
            
        default:
            return state;
    }
};

export default reducer;
