// Staff Form Strucutre
exports.generateEmployee = function (selectedEmployee) {
  if (!selectedEmployee) {
    selectedEmployee = {
      personal: {
        info: {
          initials: "",
          firstName: "",
          middleName: "",
          lastName: "",
          fullName: "",
          email: "",
          dob: "",
          maritalStatus: "",
          gender: "",
          title: "",
          bloodGroup: "",
          placeOfBirth: "",
        },
        identification: {
          nic: "",
          passportNumber: "",
          passportExpiry: "",
          drivingLicenseNumber: "",
          expatriate: "",
        },
        ethnicity: {
          religion: "",
          nationality: "",
          race: "",
        },
        family: {
          father: {
            name: "",
            dob: "",
            occupation: "",
            employerName: "",
            alive: true,
            entitledToMedicalScheme: false,
            nic_passport: "",
            contactNumber: "",
            address: "",
          },
          mother: {
            name: "",
            dob: "",
            occupation: "",
            employerName: "",
            alive: true,
            entitledToMedicalScheme: false,
            nic_passport: "",
            contactNumber: "",
            address: "",
          },
        },
        livingSituation: {
          livingWith: "",
          monthlyIncome: "",
          numberOfDependants: "",
          numberOfChildren: "",
        },
      },
      work: {
        employeeNumbers: {
          number: "",
          epfNumber: "",
          etfNumber: "",
          attendanceIdNumber: "",
          previousEpfNumber: "",
        },
        organization: {
          company: {
            name1: "",
            name2: "",
            department: "",
          },
        },
        general: {
          designation: "",
          joinedDesignation: "",
          reportingPerson: "",
          reportingDesignation: "",
          location: "",
          jobDescription: "",
          costCenterCode: "",
          functionalReportingPersons: "",
        },
        employementDetails: {
          info: {
            basicSalary: "",
            housingAmount: "",
            budgetaryReliefAllowance: "",
            methodJoined: "",
            pensionScheme: "",
            participatedToInducation: "",
            shift: "",
          },
          appointment: {
            status: false,
            doa: "",
            employmentType: "",
            priorNoticePeriod: "",
            confirmationDueOn: "",
            orvertime: false,
            dor: "",
          },
        },
      },
      contact: {
        address: {
          building: "",
          street: "",
          city: "",
          postalCode: "",
          district: "",
          country: "",
        },
        contactInfo: {
          officePhone: "",
          extensionNumber: "",
          officeEmail: "",
          personalMobile: "",
          personalEmail: "",
        },
        location: {
          province: "",
          district: "",
          electorate: "",
          pollingDivision: "",
          distanceToWorkPlace: "",
          travelMode: "",
        },
        emergencyContact: [
          {
            name: "",
            relationship: "",
            mobileNumber: "",
            address: {
              building: "",
              street: "",
              city: "",
              postalCode: "",
              district: "",
              country: "",
              telephone: "",
            },
          },
          {
            name: "",
            relationship: "",
            mobileNumber: "",
            address: {
              building: "",
              street: "",
              city: "",
              postalCode: "",
              district: "",
              country: "",
              telephone: "",
            },
          },
        ],
      },
    };
  }
  selectedEmployee["deleted"] = false;
  return selectedEmployee;
};