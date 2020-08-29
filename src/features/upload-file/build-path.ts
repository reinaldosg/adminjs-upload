import path from 'path'
import { BaseRecord } from 'admin-bro'

/**
 * Creates a path to the file. Related to the given provider. If it is an AWS
 * path is related to the bucket.
 *
 * @param   {BaseRecord}  record
 * @param   {string}      path        file path
 *
 * @return  {string}
 * @private
 */
const buildRemotePath = (
  record: BaseRecord,
  filePath: string,
): string => {
  if (!record.id()) {
    throw new Error('you cannot upload file for not persisted record. Save record first')
  }
  const { ext, name } = path.parse(filePath)

  return `${record.id()}/${name}${ext}`
}

export default buildRemotePath
