import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f5',
  },
  teacherList: {
    marginTop: -45,
  },
  searchForm: {
    marginBottom: 24,
  },
  label: {
    color: '#d4c2ff',
    fontFamily: 'PoppinsRegular',
  },
  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputBlock: {
    width: '48%',
  },
  input: {
    height: 54,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },
  submitButton: {
    marginTop: 8,
    backgroundColor: '#04d361',
    flexDirection: 'row',
    height: 56,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontFamily: 'ArchivoBold',
    fontSize: 16,
  },
});

export default styles;
